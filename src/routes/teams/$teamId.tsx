import { createFileRoute } from '@tanstack/react-router'

import TeamPageHeader from '#/components/teams/TeamPageHeader'
import TeamInfoCard from '#/components/teams/TeamInfoCard'
import TeamKeyPlayers from '#/components/teams/TeamKeyPlayers'
import TeamNormalPlayers from '#/components/teams/TeamNormalPlayers'

export const Route = createFileRoute('/teams/$teamId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <TeamPageHeader/>
      <TeamInfoCard/>
      <TeamKeyPlayers/>
      <TeamNormalPlayers/>
    </main>
  )
}
