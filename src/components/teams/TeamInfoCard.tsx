import type { Team } from '#/types/Team'

interface TeamInfoCardProps {
  team: Team
}

export default function TeamInfoCard({ team }: TeamInfoCardProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <p>CONFERENCE</p>
        <p className="font-bold text-white">{team.conference}</p>
      </div>
      <div>
        <p>ARENA</p>
        <p className="font-bold text-white">{team.stadium}</p>
      </div>
      <div>
        <p>COACH</p>
        <p className="font-bold text-white">{team.manager}</p>
      </div>
      <div>
        <p>CHAMPIONSHIPS</p>
        <p className="font-bold text-white">{team.championshipRings}</p>
      </div>
    </div>
  )
}