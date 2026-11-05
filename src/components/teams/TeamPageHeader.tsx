import type { Team } from '#/types/Team'

interface TeamPageHeaderProps {
  team: Team
}

export default function TeamPageHeader({ team }: TeamPageHeaderProps) {
  return (
    <div className="w-full min-h-50 flex items-center bg-[#15181e] p-5 pt-7 rounded-3xl border-b-4 border-white gap-8">
      <img src={team.logo} alt={`${team.name1} ${team.name2} logo`} className="h-50 w-50 object-contain" />
      <div>
        <p>{team.name1}</p>
        <h1>{team.name2}</h1>
      </div>
    </div>
  )
}