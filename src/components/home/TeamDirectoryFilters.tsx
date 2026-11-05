import type { ConferenceFilter } from './TeamDirectory'

interface TeamDirectoryFiltersProps {
    value: ConferenceFilter
    onChange: (conference: ConferenceFilter) => void
}

export default function TeamDirectoryFilters({ value, onChange }: TeamDirectoryFiltersProps) {
    const filters: ConferenceFilter[] = ['ALL', 'EAST', 'WEST']

    return (
        <nav aria-label="Filter teams by conference" className="flex flex-row gap-2 sm:gap-4">
            {filters.map((filter) => (
                <button key={filter} type="button" aria-pressed={value === filter} onClick={() => onChange(filter)} className={`w-fit rounded-4xl border px-4 py-2 transition-colors ${value === filter ? 'border-orange-400 bg-orange-400 text-black' : 'border-gray-500 bg-transparent text-white hover:border-orange-500'}`}>
                    {filter}
                </button>
            ))}
        </nav>
    )
}
