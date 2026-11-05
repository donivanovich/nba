import { Link } from '@tanstack/react-router'

import playersData from '../../data/players.json'
import statsData from '../../data/stats.json'
import teamsData from '../../data/teams.json'

import type { Player } from '../../types/Player'
import type { Team } from '../../types/Team'

const teams = teamsData as Team[]
const players = playersData as Player[]

interface TeamPlayerCardProps {
    teamId: number
    type: 'key' | 'normal'
}

export default function TeamPlayerCard({ teamId, type }: TeamPlayerCardProps) {
    const team = teams.find((team) => team.id === teamId)

    const teamPlayers = players.filter((player) => {
        const belongsToTeam = player.teamId === teamId
        const isKeyPlayer = player.status === 'Superstar' || player.status === 'Star'

        return type === 'key'
        ? belongsToTeam && isKeyPlayer
        : belongsToTeam && !isKeyPlayer
    })

    return (
        <div className="player-grid">
            {teamPlayers.map((player) => {
                const [month, day, year] = player.dateOfBirth.split('/').map(Number)
                const today = new Date()
                const age = today.getFullYear() - year - (
                    today.getMonth() < month - 1 ||
                    (today.getMonth() === month - 1 && today.getDate() < day) ? 1 : 0
                )
                const slug = `${player.name}-${player.surname}`
                .toLowerCase()
                .replace(/\s+/g, '-')

                const stats = statsData.find(
                    (stat) => stat.playerId === player.id
                )

                return (
                <Link
                    key={player.id}
                    to="/players/$slug"
                    params={{ slug }}
                    className="
                        player-card
                        hover:border-(--team-primary)
                        hover:shadow-[0_0_20px_color-mix(in_srgb,var(--team-primary)_25%,transparent)]
                        before:absolute before:inset-x-0 before:top-0
                        before:h-1.5
                        before:bg-[linear-gradient(90deg,var(--team-primary),var(--team-secondary))]
                    "
                    style={{ '--team-primary': team?.backgroundcolorPrimary, '--team-secondary': team?.backgroundcolorSecondary } as React.CSSProperties}
                >
                    <div
                        className="flex items-end justify-center w-full aspect-2/1 overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${team?.backgroundcolorPrimary}, ${team?.backgroundcolorSecondary})`,
                        }}
                    >
                        <img
                            src={player.photo}
                            alt={player.fullname}
                            className="h-full w-auto max-w-full object-contain object-bottom"
                        />
                    </div>

                    <div className="flex flex-col w-full p-4 gap-4">
                        <div className="flex flex-row items-center justify-between w-full">
                            <span className="jersey-number text-2xl font-bold" style={{ color: team?.backgroundcolorSecondary }}>
                                #{player.number}
                            </span>
                            <span>{player.position}</span>
                        </div>

                        <div className="flex flex-row items-center justify-between w-full">
                            <h3 className="text-lg font-bold">
                                {player.name} {player.surname}
                            </h3>
                            <img
                                src={player.flag}
                                alt={player.country}
                                className="w-12 h-8 rounded-full"
                            />
                        </div>

                        <div className="flex flex-row items-center justify-between w-full">
                            <p>{player.status} · {age} yrs</p>
                        </div>

                        <div className="flex flex-row items-center justify-between w-full gap-4">
                            <div className="bg-[#21242a] rounded-xl p-3 flex flex-col items-center flex-1">
                                <p className="text-xl font-bold text-white">
                                    {stats?.points ?? 0}
                                </p>
                                <span className="text-sm text-secondary">PTS</span>
                            </div>

                            <div className="bg-[#21242a] rounded-xl p-3 flex flex-col items-center flex-1">
                                <p className="text-xl font-bold text-white">
                                    {stats?.rebounds ?? 0}
                                </p>
                                <span className="text-sm text-secondary">REB</span>
                            </div>

                            <div className="bg-[#21242a] rounded-xl p-3 flex flex-col items-center flex-1">
                                <p className="text-xl font-bold text-white">
                                    {stats?.assists ?? 0}
                                </p>
                                <span className="text-sm text-secondary">AST</span>
                            </div>
                        </div>
                    </div>
                </Link>
                )
            })}
        </div>
    )
}
