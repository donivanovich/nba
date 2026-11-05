import type { Stat } from '#/types/Stat'
import PlayerStatCard from './PlayerStatCard'

interface PlayerStatsSectionProps {
    stats?: Stat
}

export default function PlayerStatsSection({
    stats,
}: PlayerStatsSectionProps) {
    const gamesPlayed = stats?.gamesPlayed ?? 0

    const perGame = (value: number | undefined) =>
        gamesPlayed > 0 ? (value ?? 0) / gamesPlayed : 0

    const averages = [
        { label: 'POINTS', value: perGame(stats?.points) },
        { label: 'REBOUNDS', value: perGame(stats?.rebounds) },
        { label: 'ASSISTS', value: perGame(stats?.assists) },
        { label: 'MINUTES', value: perGame(stats?.minutesPlayed) },
        { label: 'STEALS', value: perGame(stats?.steals) },
        { label: 'BLOCKS', value: perGame(stats?.blocks) },
        { label: 'TURNOVERS', value: perGame(stats?.turnovers) },
        { label: 'GAMES', value: gamesPlayed },
    ]

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl font-black uppercase">
                Per-game averages
            </h2>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {averages.map((stat) => (
                    <PlayerStatCard
                        key={stat.label}
                        label={stat.label}
                        value={stat.value}
                        decimals={stat.label === 'GAMES' ? 0 : 1}
                    />
                ))}
            </div>
        </section>
    )
}