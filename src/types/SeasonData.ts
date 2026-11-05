import type { Player } from './Player'
import type { Stat } from './Stat'
import type { Team } from './Team'

export interface SeasonData {
    teams: Team[]
    players: Player[]
    stats: Stat[]
}
