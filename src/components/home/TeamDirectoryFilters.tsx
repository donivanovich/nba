interface TeamDirectoryFiltersProps {
    value: string
    onChange: (conference: string) => void
}

export default function TeamDirectoryFilters({ value, onChange }: TeamDirectoryFiltersProps) {
    const filters = ['ALL', 'EAST', 'WEST']

    return (
        <nav aria-label="Filter teams by conference" className="flex flex-row gap-2 sm:gap-4">
            {filters.map((filter) => (
                <button key={filter} type="button" aria-pressed={value === filter} onClick={() => onChange(filter)} className="w-fit rounded-4xl border border-gray-500 bg-orange-400 px-4 py-2 text-black hover:border-orange-500">
                    {filter}
                </button>
            ))}
        </nav>
    )
}
