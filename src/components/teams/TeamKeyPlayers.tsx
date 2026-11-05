import TeamPlayerCard from './TeamPlayerCard'

interface TeamKeyPlayersProps {
    teamId: number
    season: string
}

export default function TeamKeyPlayers({ teamId, season }: TeamKeyPlayersProps) {
    return (
        <section className="flex flex-col gap-4">
            <h2>KEY PLAYERS</h2>
            <TeamPlayerCard teamId={teamId} type="key" season={season} />
        </section>
    )
}
