import TeamPlayerCard from './TeamPlayerCard'

interface TeamKeyPlayersProps {
    teamId: number
}

export default function TeamKeyPlayers({ teamId }: TeamKeyPlayersProps) {
    return (
        <>
            <h2>KEY PLAYERS</h2>
            <TeamPlayerCard teamId={teamId} type="key" />
        </>
    )
}