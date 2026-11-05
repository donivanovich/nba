import type { Team } from '#/types/Team'

interface TeamPageHeaderProps {
  team: Team
}

export default function TeamPageHeader({ team }: TeamPageHeaderProps) {
  return (
    <div
      className="team-hero"
      style={{
        background: `linear-gradient(135deg, ${team.backgroundcolorPrimary} 35%, ${team.backgroundcolorSecondary} 100%)`,
        borderBottomColor: team.backgroundcolorSecondary,
      }}
    >
      <img
        src={team.logo}
        alt={`${team.name1} ${team.name2} logo`}
        className="h-50 w-50 shrink-0 object-contain"
      />

      <div>
        <p>{team.name1}</p>
        <h1>{team.name2}</h1>
      </div>
    </div>
  )
}
