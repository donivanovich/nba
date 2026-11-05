import { createFileRoute } from '@tanstack/react-router'

import { getSeasonData } from '#/data/seasons'
import PlayerPageHeader from '#/components/players/PlayerPageHeader'
import PlayerHero from '#/components/players/PlayerHero'
import PlayerStatsSection from '#/components/players/PlayerStatsSection'
import PlayerShootingStats from '#/components/players/PlayerShootingStats'
import PlayerBioSection from '#/components/players/PlayerBioSection'

export const Route = createFileRoute('/$season/teams/$abbreviation/$slug')({
    component: PlayerPage,
})

function PlayerPage() {
    const { season, abbreviation, slug } = Route.useParams()
    const seasonData = getSeasonData(season)
    const team = seasonData?.teams.find(
        (item) => item.abbreviation.toLowerCase() === abbreviation.toLowerCase(),
    )
    const player = seasonData?.players.find((item) => {
        const playerSlug = `${item.name}-${item.surname}`
            .toLowerCase()
            .replace(/\s+/g, '-')

        return playerSlug === slug.toLowerCase() && item.teamId === team?.id
    })

    if (!seasonData || !team || !player) {
        return (
            <main className="p-8 text-lg text-white">
                Player not found for the {season} season and {abbreviation}.
            </main>
        )
    }

    const stats = seasonData.stats.find((item) => item.playerId === player.id)

    return (
        <main className="flex flex-col gap-8 text-white">
            <PlayerPageHeader
                teamName={`${team.name1} ${team.name2}`}
            />

            <PlayerHero player={player} team={team} season={season} />

            <PlayerStatsSection stats={stats} />

            <PlayerShootingStats stats={stats} team={team} />

            <PlayerBioSection player={player} />
        </main>
    )
}
