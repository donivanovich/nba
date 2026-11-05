import { useState } from 'react'
import TeamCard from './TeamDirectoryGrid'
import TeamDirectoryFilters from './TeamDirectoryFilters'
import TeamSearch from './TeamSearch'
import { currentSeason } from '#/data/seasons'
import SeasonSelector from '#/components/shared/SeasonSelector'

export type ConferenceFilter = 'ALL' | 'EAST' | 'WEST'

export default function TeamDirectory() {
    const [conference, setConference] = useState<ConferenceFilter>('ALL')
    const [query, setQuery] = useState('')
    const [season, setSeason] = useState(currentSeason)

    return (
        <section aria-label="Team directory" className="flex flex-col gap-6">
            <div className="team-directory flex flex-row items-center justify-between gap-4">
                <TeamDirectoryFilters value={conference} onChange={setConference} />
                <SeasonSelector value={season} onChange={setSeason} />
                <TeamSearch value={query} onChange={setQuery} />
            </div>
            <TeamCard conference={conference} query={query} season={season} />
        </section>
    )
}
