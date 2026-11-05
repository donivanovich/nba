import type { Team } from '#/types/Team'

interface PlayerTeamLogoProps {
    team: Team
}

export default function PlayerTeamLogo({ team }: PlayerTeamLogoProps) {
    return (
        <img
            src={team.logo}
            alt={`${team.name1} ${team.name2}`}
            className="absolute right-5 top-5 h-16 w-16 rounded-full bg-white/20 p-2 object-contain"
        />
    )
}