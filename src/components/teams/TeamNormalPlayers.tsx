import TeamPlayerCard from './TeamPlayerCard'

interface TeamNormalPlayersProps {
    teamId: number
    season: string
}

export default function TeamNormalPlayers({ teamId, season }: TeamNormalPlayersProps) {
    return (
        <section className="flex flex-col gap-4">
            <h2>PLAYERS</h2>
            <TeamPlayerCard teamId={teamId} type="normal" season={season} />
        </section>
    )
}
