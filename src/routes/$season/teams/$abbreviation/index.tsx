import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { getSeasonData } from '#/data/seasons'
import TeamInfoCard from '#/components/teams/TeamInfoCard'
import TeamKeyPlayers from '#/components/teams/TeamKeyPlayers'
import TeamNormalPlayers from '#/components/teams/TeamNormalPlayers'
import TeamPageHeader from '#/components/teams/TeamPageHeader'
import BackButton from '#/components/shared/BackButton'
import SeasonSelector from '#/components/shared/SeasonSelector'

export const Route = createFileRoute('/$season/teams/$abbreviation/')({
  component: TeamRoute,
})

function TeamRoute() {
  const { season, abbreviation } = Route.useParams()
  const navigate = useNavigate()
  const seasonData = getSeasonData(season)
  const team = seasonData?.teams.find(
    (item) => item.abbreviation.toLowerCase() === abbreviation.toLowerCase(),
  )

  if (!seasonData || !team) {
    return (
      <main>
        <p>Team not found for the {season} season.</p>
      </main>
    )
  }

  return (
    <main className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-4">
        <BackButton label="HOME" />
        <SeasonSelector
          value={season}
          onChange={(nextSeason) =>
            navigate({
              to: '/$season/teams/$abbreviation',
              params: { season: nextSeason, abbreviation },
            })
          }
        />
      </div>
      <TeamPageHeader team={team} />
      <TeamInfoCard team={team} />
      <TeamKeyPlayers teamId={team.id} season={season} />
      <TeamNormalPlayers teamId={team.id} season={season} />
    </main>
  )
}
