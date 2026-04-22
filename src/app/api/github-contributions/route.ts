import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'yoseflakew25'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const CONTRIBUTIONS_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`

function levelToNumber(level: string): 0 | 1 | 2 | 3 | 4 {
    switch (level) {
        case 'NONE': return 0
        case 'FIRST_QUARTILE': return 1
        case 'SECOND_QUARTILE': return 2
        case 'THIRD_QUARTILE': return 3
        case 'FOURTH_QUARTILE': return 4
        default: return 0
    }
}

export async function GET() {
    if (!GITHUB_TOKEN) {
        return NextResponse.json(
            { error: 'GITHUB_TOKEN not configured' },
            { status: 500 }
        )
    }

    // Rolling last 12 months (matches GitHub's "last year" view)
    const to = new Date()
    const from = new Date()
    from.setFullYear(from.getFullYear() - 1)

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: CONTRIBUTIONS_QUERY,
                variables: {
                    username: GITHUB_USERNAME,
                    from: from.toISOString(),
                    to: to.toISOString(),
                },
            }),
            next: { revalidate: 3600 }, // Cache for 1 hour
        })

        const json = await response.json()

        if (json.errors) {
            return NextResponse.json({ error: json.errors[0].message }, { status: 400 })
        }

        const calendar = json.data.user.contributionsCollection.contributionCalendar

        // Flatten weeks → days into a flat sorted array
        const contributions = calendar.weeks.flatMap((week: any) =>
            week.contributionDays.map((day: any) => ({
                date: day.date,
                count: day.contributionCount,
                level: levelToNumber(day.contributionLevel),
            }))
        )

        return NextResponse.json({
            total: { lastYear: calendar.totalContributions },
            contributions,
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
