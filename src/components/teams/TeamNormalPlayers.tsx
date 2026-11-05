import TeamPlayerCard from './TeamPlayerCard'

interface TeamNormalPlayersProps {
    teamId: number
}

export default function TeamNormalPlayers({ teamId }: TeamNormalPlayersProps) {
    return (
        <>
            <h2>PLAYERS</h2>
            <TeamPlayerCard teamId={teamId} type="normal" />
        </>
    )
}