import type { Team } from '#/types/Team'

interface TeamInfoCardProps {
  team: Team
}

export default function TeamInfoCard({ team }: TeamInfoCardProps) {
  return (
    <dl className="team-info-grid">
      {[
        ['CONFERENCE', team.conference],
        ['ARENA', team.stadium],
        ['COACH', team.manager],
        ['CHAMPIONSHIPS', team.championshipRings],
      ].map(([label, value]) => <div className="team-info-card" key={label}><dt>{label}</dt><dd className="font-bold text-white">{value}</dd></div>)}
    </dl>
  )
}
