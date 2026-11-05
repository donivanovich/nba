import { createFileRoute } from '@tanstack/react-router'

import playersData from '#/data/players.json'
import teamsData from '#/data/teams.json'
import statsData from '#/data/stats.json'

import type { Player } from '#/types/Player'
import type { Team } from '#/types/Team'
import type { Stat } from '#/types/Stat'

import PlayerPageHeader from '#/components/players/PlayerPageHeader'
import PlayerHero from '#/components/players/PlayerHero'
import PlayerStatsSection from '#/components/players/PlayerStatsSection'
import PlayerShootingStats from '#/components/players/PlayerShootingStats'
import PlayerBioSection from '#/components/players/PlayerBioSection'

const players = playersData as Player[]
const teams = teamsData as Team[]
const statsList = statsData as Stat[]

export const Route = createFileRoute('/players/$slug')({
    component: PlayerPage,
})

function PlayerPage() {
    const { slug } = Route.useParams()

    const player = players.find((item) => {
        const playerSlug = `${item.name}-${item.surname}`
            .toLowerCase()
            .replace(/\s+/g, '-')

        return playerSlug === slug.toLowerCase()
    })

    if (!player) {
        return (
            <main className="p-8 text-lg text-white">
                Player not found.
            </main>
        )
    }

    const team = teams.find((item) => item.id === player.teamId)
    const stats = statsList.find((item) => item.playerId === player.id)

    return (
        <main className="flex flex-col gap-8 text-white">
            <PlayerPageHeader
                teamName={team ? `${team.name1} ${team.name2}` : 'BACK'}
            />

            <PlayerHero player={player} team={team} />

            <PlayerStatsSection stats={stats} />

            <PlayerShootingStats stats={stats} team={team} />

            <PlayerBioSection player={player} />
        </main>
    )
}