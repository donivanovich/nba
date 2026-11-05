import { createFileRoute } from '@tanstack/react-router'

import teamsData from '#/data/teams.json'
import TeamPageHeader from '#/components/teams/TeamPageHeader'
import TeamInfoCard from '#/components/teams/TeamInfoCard'
import TeamKeyPlayers from '#/components/teams/TeamKeyPlayers'
import TeamNormalPlayers from '#/components/teams/TeamNormalPlayers'
import type { Team } from '#/types/Team'
import BackButton from '#/components/shared/BackButton'

const teams = teamsData as Team[]

export const Route = createFileRoute('/teams/$abbreviation')({
  component: RouteComponent,
})

function RouteComponent() {
  const { abbreviation } = Route.useParams()

  const team = teams.find(
    (item) => item.abbreviation.toLowerCase() === abbreviation.toLowerCase()
  )

  if (!team) {
    return (
      <main>
        <p>Team not found.</p>
      </main>
    )
  }

  return (
    <main className="flex flex-col gap-8">
      <BackButton label="HOME" />
      <TeamPageHeader team={team} />
      <TeamInfoCard team={team} />
      <TeamKeyPlayers teamId={team.id} />
      <TeamNormalPlayers teamId={team.id} />
    </main>
  )
}