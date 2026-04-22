'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ActivityCalendar } from 'react-activity-calendar'
import { GitBranch, Star, Users, Code, Activity } from 'lucide-react'
import ScrollReveal from './ui/scroll-reveal'
import SectionHeader from './ui/section-header'

const GITHUB_USERNAME = 'yoseflakew25'

const LANGUAGE_COLORS: Record<string, string> = {
    Python: '#3572A5',
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    Shell: '#89e051',
    C: '#555555',
    Java: '#b07219',
    PHP: '#4F5D95',
    Go: '#00ADD8',
    'C++': '#f34b7d',
    CSS: '#563d7c',
    Rust: '#dea584',
    Swift: '#F05138',
}

// === Stat Card ===
const StatCard = ({
    label,
    value,
    icon: Icon,
    delay = 0,
    isLoading = false,
}: {
    label: string
    value: string | number
    icon: React.ElementType
    delay?: number
    isLoading?: boolean
}) => (
    <ScrollReveal variant="fadeUp" delay={delay}>
        <div className="relative group overflow-hidden p-5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-cyber-cyan/30 hover:bg-white/[0.04]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center justify-between">
                <div className="space-y-1">
                    <p className="font-jetbrains text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                    {isLoading ? (
                        <div className="h-8 w-16 bg-white/5 animate-pulse rounded" />
                    ) : (
                        <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white group-hover:text-cyber-cyan transition-colors">{value}</h3>
                    )}
                </div>
                <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-shadow">
                    <Icon size={20} />
                </div>
            </div>
            <div className="absolute -bottom-1 -right-1 size-12 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity bg-cyber-cyan" />
        </div>
    </ScrollReveal>
)

// === Contribution Calendar (client-only to avoid SSR issues) ===
const ContributionCalendar = ({ data, total }: { data: any[]; total: number }) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!mounted) return <div className="w-full h-36 bg-white/5 animate-pulse rounded-xl" />

    const theme = {
        light: ['hsl(220,15%,10%)', 'hsl(180,100%,50%,0.15)', 'hsl(180,100%,50%,0.38)', 'hsl(180,100%,50%,0.65)', 'hsl(180,100%,50%,1)'],
        dark: ['hsl(220,15%,10%)', 'hsl(180,100%,50%,0.15)', 'hsl(180,100%,50%,0.38)', 'hsl(180,100%,50%,0.65)', 'hsl(180,100%,50%,1)'],
    }

    return (
        <ActivityCalendar
            data={data}
            theme={theme}
            colorScheme="dark"
            blockSize={13}
            blockMargin={4}
            fontSize={12}
            labels={{
                totalCount: `${total.toLocaleString()} contributions in the last year`,
            }}
        />
    )
}

// === Main Component ===
const GithubActivity = () => {
    // --- GitHub stats (user + repos) ---
    const { data: userData, isLoading: userLoading } = useQuery({
        queryKey: ['github-user', GITHUB_USERNAME],
        queryFn: async () => {
            const res = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`)
            return res.data
        },
    })

    const { data: repoData, isLoading: reposLoading } = useQuery({
        queryKey: ['github-repos', GITHUB_USERNAME],
        queryFn: async () => {
            const res = await axios.get(
                `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`
            )
            return res.data
        },
    })

    // --- Authenticated contributions from our API route ---
    const { data: contributionData, isLoading: contribLoading } = useQuery({
        queryKey: ['github-contributions'],
        queryFn: async () => {
            const res = await axios.get('/api/github-contributions')
            return res.data
        },
    })

    const stats = useMemo(() => {
        if (!userData || !repoData) return null

        const totalStars = repoData.reduce((acc: number, r: any) => acc + r.stargazers_count, 0)

        const langMap: Record<string, number> = {}
        repoData.forEach((r: any) => {
            if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1
        })

        const languages = Object.entries(langMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([name, count]) => ({ name, count, color: LANGUAGE_COLORS[name] ?? '#888' }))

        return {
            publicRepos: userData.public_repos,
            stars: totalStars,
            followers: userData.followers,
            topLanguage: languages[0]?.name ?? 'N/A',
            languages,
        }
    }, [userData, repoData])

    return (
        <section className="space-y-8 py-8">
            <ScrollReveal variant="fadeUp">
                <SectionHeader
                    title="GitHub Activity"
                    subtitle="Open source contributions and real-time coding activity."
                />
            </ScrollReveal>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Public Repos" value={stats?.publicRepos ?? '—'} icon={GitBranch} delay={0.1} isLoading={userLoading} />
                <StatCard label="Total Stars" value={stats?.stars ?? '—'} icon={Star} delay={0.2} isLoading={reposLoading} />
                <StatCard label="Followers" value={stats?.followers ?? '—'} icon={Users} delay={0.3} isLoading={userLoading} />
                <StatCard label="Top Language" value={stats?.topLanguage ?? '—'} icon={Code} delay={0.4} isLoading={reposLoading} />
            </div>

            {/* Contribution Calendar */}
            {/* <ScrollReveal variant="fadeUp" delay={0.5}>
                <div className="p-6 sm:p-8 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-white/90 font-orbitron text-sm sm:text-base tracking-wide mb-6">
                        <Activity size={18} className="text-cyber-cyan" />
                        <span>Contribution Activity</span>
                    </div>
                    <div className="overflow-x-auto">
                        <div style={{ minWidth: 680 }}>
                            {contribLoading || !contributionData ? (
                                <div className="w-full h-36 bg-white/5 animate-pulse rounded-xl" />
                            ) : (
                                <ContributionCalendar
                                    data={contributionData.contributions}
                                    total={contributionData.total.lastYear}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </ScrollReveal> */}

            {/* Top Languages */}
            <ScrollReveal variant="fadeUp" delay={0.6}>
                <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                    <h4 className="font-orbitron text-sm text-white/70 uppercase tracking-widest mb-5">Top Languages</h4>
                    <div className="flex flex-wrap gap-3">
                        {reposLoading
                            ? [...Array(5)].map((_, i) => <div key={i} className="h-10 w-32 bg-white/5 animate-pulse rounded-lg" />)
                            : stats?.languages.map(lang => (
                                <div
                                    key={lang.name}
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/5 bg-white/[0.01] hover:border-cyber-cyan/20 hover:bg-white/[0.03] transition-all"
                                >
                                    <div className="size-3 rounded-full flex-shrink-0" style={{ backgroundColor: lang.color }} />
                                    <span className="font-jetbrains text-sm text-white/80">{lang.name}</span>
                                    <span className="font-jetbrains text-xs text-muted-foreground">{lang.count} repos</span>
                                </div>
                            ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}

export default GithubActivity
