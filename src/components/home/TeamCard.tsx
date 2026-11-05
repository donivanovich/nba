import { Link } from '@tanstack/react-router'
import teamsData from '../../data/teams.json'
import playersData from '../../data/players.json'
import type { Team } from '../../types/Team'
import type { Player } from '../../types/Player'

const teams = teamsData as Team[]
const players = playersData as Player[]

export default function TeamCard() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {teams.map((team) => {
        const superstar = players.find(
          (player) =>
            player.teamId === team.id &&
            (player.status === 'Superstar' || player.status === 'Star')
        )

        return (
          <Link
            key={team.id}
            to="/teams/$abbreviation"
            params={{ abbreviation: team.abbreviation.toLowerCase() }}
            style={{
              '--team-primary': team.backgroundcolorPrimary,
              '--team-secondary': team.backgroundcolorSecondary,
            } as React.CSSProperties}
            className="
              relative isolate flex w-full min-h-50 flex-col
              justify-between overflow-hidden
              rounded-3xl border border-white/10
              bg-[#15181e] p-5 pt-7
              transition-all duration-300
              hover:-translate-y-1
              hover:border-(--team-primary)
              hover:shadow-[0_0_20px_color-mix(in_srgb,var(--team-primary)_25%,transparent)]
              before:absolute before:inset-x-0 before:top-0
              before:h-1.5
              before:bg-[linear-gradient(90deg,var(--team-primary),var(--team-secondary))]
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary">{team.name1}</p>
                <h2 className="text-2xl font-bold">{team.name2}</h2>
              </div>

              <img
                className="h-20 w-20 object-contain"
                src={team.logo}
                alt={team.name1 + ' ' + team.name2 + ' logo'}
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
      })}
    </div>
  )
}