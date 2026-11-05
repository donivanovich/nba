import TeamPlayerCard from './TeamPlayerCard'

interface TeamKeyPlayersProps {
    teamId: number
}

export default function TeamKeyPlayers({ teamId }: TeamKeyPlayersProps) {
    return (
        <section className="flex flex-col gap-4">
            <h2>KEY PLAYERS</h2>
            <TeamPlayerCard teamId={teamId} type="key" />
        </section>
    )
}
