import config from '~/config'
import SectionHeader from '~/components/ui/section-header'
import ScrollReveal from '~/components/ui/scroll-reveal'

const GITHUB_USERNAME = config.social.github.replace(/\/+$/, '').split('/').pop() || 'yoseflakew25'

/**
 * Additional GitHub accounts whose activity should be merged into this section.
 *
 * History: commits made with `akil-vercel@a2sv.org` were credited to the empty
 * `Akil-1-web` stub account (auto-created by the Vercel/A2SV setup). That email is
 * now verified on the primary account, so GitHub is reattributing those commits
 * here and no merge is needed. Re-add any account here that accumulates its own
 * real activity.
 */
const SECONDARY_GITHUB_ACCOUNTS: string[] = []

const ALL_ACCOUNTS = [GITHUB_USERNAME, ...SECONDARY_GITHUB_ACCOUNTS]


/* ── Data types ── */
interface GithubUser {
  public_repos: number
  followers: number
}

interface GithubRepo {
  stargazers_count: number
  language: string | null
}

interface ContributionCell {
  date: string
  level: number
}

interface AccountData {
  username: string
  user: GithubUser
  repos: GithubRepo[]
  contributions: { total: number; cells: ContributionCell[] }
}

/* ── Brand colors for language dots (GitHub language colors) ── */
const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  Shell: '#89e051',
  C: '#555555',
  CSS: '#563d7c',
  Java: '#b07219',
  'C++': '#f34b7d',
  'C#': '#178600',
  Vue: '#41b883',
  Jupyter: '#DA5B0B',
  SCSS: '#c6538c',
  Dart: '#00B4AB',
  Go: '#00ADD8',
  Rust: '#dea584',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Ruby: '#701516',
  PHP: '#4F5D95',
}

/* ── Fetch helpers (ISR — revalidated hourly) ── */
async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'portfolio-builder',
      Accept: 'application/vnd.github+json',
    },
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)
  return res.json() as Promise<T>
}

async function fetchContributions(username: string): Promise<{ total: number; cells: ContributionCell[] }> {
  const res = await fetch(`https://github.com/users/${username}/contributions`, {
    headers: { 'User-Agent': 'portfolio-builder' },
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error(`GitHub contributions responded with ${res.status}`)
  const html = await res.text()

  const totalMatch = html.match(/(\d[\d,]*)\s+contributions?\s+in the last year/)
  const total = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : 0

  const cells: ContributionCell[] = []
  const cellRe = /<td[^>]*class="ContributionCalendar-day"[^>]*>/g
  let match: RegExpExecArray | null
  while ((match = cellRe.exec(html)) !== null) {
    const tag = match[0]
    const date = tag.match(/data-date="([^"]+)"/)?.[1]
    const level = tag.match(/data-level="([0-4])"/)?.[1]
    if (date && level) {
      cells.push({ date, level: parseInt(level, 10) })
    }
  }
  return { total, cells }
}

async function fetchAccount(username: string): Promise<AccountData> {
  const [user, repos, contributions] = await Promise.all([
    fetchJson<GithubUser>(`https://api.github.com/users/${username}`),
    fetchJson<GithubRepo[]>(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    ),
    fetchContributions(username),
  ])
  return { username, user, repos, contributions }
}


/* ── Level → cyan fill (blueprint heat) ── */
const LEVEL_OPACITY = [0, 0.22, 0.4, 0.65, 1]

const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

/* ================================================================ */
const GithubActivity = async () => {
  let data: {
    user: GithubUser
    totalStars: number
    topLanguage: string | null
    languages: { name: string; count: number }[]
    contributions: { total: number; weeks: { date: string; level: number | null }[][] }
  } | null = null

  try {
    const results = await Promise.all(
      ALL_ACCOUNTS.map(async username => {
        try {
          return await fetchAccount(username)
        } catch (error) {
          console.error(`[GithubActivity] failed to fetch ${username}:`, error)
          return null
        }
      }),
    )
    const accounts = results.filter((r): r is AccountData => r !== null)
    if (accounts.length === 0) return null

    /* ── Merge stats across accounts ── */
    const user: GithubUser = {
      public_repos: accounts.reduce((sum, account) => sum + account.user.public_repos, 0),
      followers: accounts.reduce((sum, account) => sum + account.user.followers, 0),
    }
    const totalStars = accounts.reduce(
      (sum, account) => sum + account.repos.reduce((s, repo) => s + repo.stargazers_count, 0),
      0,
    )

    const langCounts = new Map<string, number>()
    accounts.forEach(account => {
      account.repos.forEach(repo => {
        if (!repo.language) return
        langCounts.set(repo.language, (langCounts.get(repo.language) ?? 0) + 1)
      })
    })
    const languages = Array.from(langCounts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)

    /* ── Merge contribution graphs (additive totals, max level per day) ── */
    const contributionsTotal = accounts.reduce((sum, account) => sum + account.contributions.total, 0)
    const levelByDate = new Map<string, number>()
    accounts.forEach(account => {
      account.contributions.cells.forEach(cell => {
        const existing = levelByDate.get(cell.date)
        if (existing === undefined || cell.level > existing) {
          levelByDate.set(cell.date, cell.level)
        }
      })
    })

    /* Rebuild a GitHub-style 7×N week grid from the merged dates */
    const dates = Array.from(levelByDate.keys()).sort()
    const first = new Date(`${dates[0]}T00:00:00Z`)
    const last = new Date(`${dates[dates.length - 1]}T00:00:00Z`)
    const start = new Date(first)
    start.setUTCDate(first.getUTCDate() - first.getUTCDay()) // back to Sunday

    const weeks: { date: string; level: number | null }[][] = []
    const cursor = new Date(start)
    while (cursor <= last) {
      const week: { date: string; level: number | null }[] = []
      for (let day = 0; day < 7; day++) {
        const iso = cursor.toISOString().slice(0, 10)
        week.push({ date: iso, level: levelByDate.get(iso) ?? null })
        cursor.setUTCDate(cursor.getUTCDate() + 1)
      }
      weeks.push(week)
    }

    data = {
      user,
      totalStars,
      topLanguage: languages[0]?.name ?? null,
      languages: languages.slice(0, 6),
      contributions: { total: contributionsTotal, weeks },
    }
  } catch (error) {
    // Live data unavailable — skip the section instead of breaking the page.
    console.error('[GithubActivity] failed to fetch:', error)
    return null
  }

  return (
    <section aria-label="GitHub Activity" className="space-y-6 scroll-mt-24">
      <ScrollReveal variant="blueprintReveal">
        <SectionHeader
          title="GitHub Activity"
          subtitle="Open source contributions and coding activity."
          sheet="LIVE · API"
        />
      </ScrollReveal>

      {/* ── Stats row ── */}
      <ScrollReveal variant="blueprintReveal" delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label="Public Repos" value={data.user.public_repos.toLocaleString()} />
          <StatCard label="Total Stars" value={data.totalStars.toLocaleString()} />
          <StatCard label="Followers" value={data.user.followers.toLocaleString()} />
          <StatCard label="Top Language" value={data.topLanguage ?? '—'} valueClassName="text-lg leading-tight" />
        </div>
      </ScrollReveal>


      {/* ── Top languages ── */}
      <ScrollReveal variant="blueprintReveal" delay={0.2}>
        <div className="border border-[hsl(var(--border))] bg-card p-4 sm:p-5 transition-all duration-300 hover:border-[hsl(var(--blueprint-line)/0.5)]">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[hsl(var(--blueprint-line))] uppercase">
              Top Languages
            </h3>
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              BY REPO COUNT
            </span>
          </div>

          {data.languages.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.languages.map(lang => (
                <span
                  key={lang.name}
                  className="inline-flex items-center gap-2 border border-[hsl(var(--border))] px-2.5 py-1.5 font-mono text-[10px] tracking-wider uppercase text-foreground/85 transition-all duration-200 hover:border-[hsl(var(--blueprint-line)/0.4)] hover:text-[hsl(var(--blueprint-line))]"
                >
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full"
                    style={{ background: LANGUAGE_COLORS[lang.name] ?? 'hsl(var(--blueprint-line))' }}
                  />
                  <span>{lang.name}</span>
                  <span className="text-muted-foreground">{lang.count} repos</span>
                </span>
              ))}
            </div>
          ) : (
            <p className="font-mono text-[10px] text-muted-foreground">No language data available.</p>
          )}
        </div>
      </ScrollReveal>
    </section>
  )
}

/* ── Stat card ── */
const StatCard = ({
  label,
  value,
  valueClassName = '',
}: {
  label: string
  value: number | string
  valueClassName?: string
}) => {
  return (
    <div className="border border-[hsl(var(--border))] bg-card px-4 py-4 transition-all duration-300 hover:border-[hsl(var(--blueprint-line)/0.5)]">
      <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </span>
      <p className={`font-mono text-2xl font-bold text-[hsl(var(--blueprint-line))] tabular-nums mt-2 ${valueClassName}`}>
        {value}
      </p>
    </div>
  )
}

export default GithubActivity
