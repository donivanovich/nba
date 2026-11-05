import { Link } from '@tanstack/react-router'
import { getSeasonData } from '#/data/seasons'
import type { ConferenceFilter } from './TeamDirectory'

interface TeamCardProps {
  conference: ConferenceFilter
  query: string
  season: string
}

export default function TeamCard({ conference, query, season }: TeamCardProps) {
  const seasonData = getSeasonData(season)
  const teams = seasonData?.teams ?? []
  const players = seasonData?.players ?? []
  const visibleTeams = teams.filter((team) => {
    const matchesConference = conference === 'ALL' || team.conference.trim().toUpperCase() === conference
    const matchesQuery = `${team.name1} ${team.name2}`.toLowerCase().includes(query.trim().toLowerCase())
    return matchesConference && matchesQuery
  })

  return (
    <section aria-label="NBA teams" className="team-grid">
      {visibleTeams.length ? visibleTeams.map((team) => {
        const superstar = players.find(
          (player) =>
            player.teamId === team.id &&
            (player.status === 'Superstar' || player.status === 'Star')
        )

        return (
          <Link
            key={team.id}
            to="/$season/teams/$abbreviation"
            params={{ season, abbreviation: team.abbreviation.toLowerCase() }}
            style={{
              '--team-primary': team.backgroundcolorPrimary,
              '--team-secondary': team.backgroundcolorSecondary,
            } as React.CSSProperties}
            className="surface-card relative isolate flex min-h-50 w-full flex-col justify-between overflow-hidden p-5 pt-7 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-[linear-gradient(90deg,var(--team-primary),var(--team-secondary))] hover:-translate-y-1 hover:border-(--team-primary) hover:shadow-[0_0_20px_color-mix(in_srgb,var(--team-primary)_25%,transparent)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary">{team.name1}</p>
                <h2 className="text-2xl font-bold">{team.name2}</h2>
              </div>

              <img
                className="h-20 w-20 object-contain"
                src={team.logo}
                alt={`${team.name1} ${team.name2} logo`}
              />
            </div>

            <div className="flex gap-4 text-sm text-secondary">
              <span>{team.conference}</span>
              <span>{team.championshipRings}</span>
            </div>

            <p className="font-semibold text-primary">
              {superstar
                ? `${superstar.name} ${superstar.surname}`
                : ''}
            </p>
          </Link>
        )
      }) : <p className="col-span-full py-8 text-center" role="status">No teams match your filters.</p>}
    </section>
  )
}
