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
          <a
            key={team.id}
            style={{
              borderImage: `linear-gradient(90deg, ${team.backgroundcolorPrimary}, ${team.backgroundcolorSecondary}) 1`,
            }}
            className="flex w-full min-h-50 flex-col justify-between rounded-4xl border border-white/10 border-t-7 bg-[#15181e] p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary">{team.city}</p>
                <h2 className="text-2xl font-bold">{team.name}</h2>
              </div>

              <img
                className="h-20 w-20 object-contain"
                src={team.logo}
                alt={team.name}
              />
            </div>

            <div className="flex gap-4 text-sm text-secondary">
              <span>{team.conference}</span>
              <span>{team.championshipRings}</span>
            </div>

            <p className="font-semibold text-primary">
              {superstar
                ? `${superstar.name} ${superstar.surname}`
                : 'No Superstar'}
            </p>
          </a>
        )
      })}
    </div>
  )
}