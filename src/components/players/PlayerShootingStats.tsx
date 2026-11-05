import type { Stat } from '#/types/Stat'
import type { Team } from '#/types/Team'
import ShootingPercentageBar from './ShootingPercentageBar'

interface PlayerShootingStatsProps {
    stats?: Stat
    team?: Team
}

export default function PlayerShootingStats({
    stats,
    team,
}: PlayerShootingStatsProps) {
    const percentage = (made: number, attempted: number) =>
        attempted > 0 ? (made / attempted) * 100 : 0

    const shootingStats = [
        {
            label: 'Field goals',
            value: percentage(
                stats?.fieldGoalsMade ?? 0,
                stats?.fieldGoalsAttempted ?? 0
            ),
        },
        {
            label: 'Three-pointers',
            value: percentage(
                stats?.threePointersMade ?? 0,
                stats?.threePointersAttempted ?? 0
            ),
        },
        {
            label: 'Free throws',
            value: percentage(
                stats?.freeThrowsMade ?? 0,
                stats?.freeThrowsAttempted ?? 0
            ),
        },
    ]

    return (
        <section className="flex flex-col gap-5">
            <h2 className="text-xl font-black uppercase">
                Shooting percentages
            </h2>

            <div className="flex flex-col gap-5">
                {shootingStats.map((stat) => (
                    <ShootingPercentageBar
                        key={stat.label}
                        label={stat.label}
                        value={stat.value}
                        primaryColor={team?.backgroundcolorPrimary}
                        secondaryColor={team?.backgroundcolorSecondary}
                    />
                ))}
            </div>
        </section>
    )
}