import playersData from './players.json'
import statsData from './stats.json'
import teamsData from '#/data/teams.json'

import type { Player } from '#/types/Player'
import type { SeasonData } from '#/types/SeasonData'
import type { Stat } from '#/types/Stat'
import type { Team } from '#/types/Team'

const seasonData = {
    teams: teamsData as Team[],
    players: playersData as Player[],
    stats: statsData as Stat[],
} satisfies SeasonData

export default seasonData
