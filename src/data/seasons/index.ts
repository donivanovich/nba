import type { SeasonData } from '#/types/SeasonData'

const seasonModules = import.meta.glob<{ default: SeasonData }>(
    './*/index.ts',
    { eager: true },
)

export const seasons = Object.fromEntries(
    Object.entries(seasonModules).map(([path, module]) => [
        path.split('/')[1],
        module.default,
    ]),
) as Record<string, SeasonData>

export const availableSeasons = Object.keys(seasons).sort().reverse()
export const currentSeason = availableSeasons[0] ?? '26-27'

export function getSeasonData(season: string): SeasonData | undefined {
    return seasons[season]
}
