import { useState } from 'react'
import TeamCard from './TeamDirectoryGrid'
import TeamDirectoryFilters from './TeamDirectoryFilters'
import TeamSearch from './TeamSearch'

export type ConferenceFilter = 'ALL' | 'EAST' | 'WEST'

export default function TeamDirectory() {
    const [conference, setConference] = useState<ConferenceFilter>('ALL')
    const [query, setQuery] = useState('')

    return (
        <section aria-label="Team directory" className="flex flex-col gap-6">
            <div className="team-directory flex flex-row justify-between">
                <TeamDirectoryFilters value={conference} onChange={setConference} />
                <TeamSearch value={query} onChange={setQuery} />
            </div>
            <TeamCard conference={conference} query={query} />
        </section>
    )
}
