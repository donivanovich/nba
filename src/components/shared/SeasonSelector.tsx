import { availableSeasons } from '#/data/seasons'

interface SeasonSelectorProps {
    value: string
    onChange: (season: string) => void
}

export default function SeasonSelector({ value, onChange }: SeasonSelectorProps) {
    return (
        <label className="flex w-fit items-center gap-3 text-sm font-semibold text-secondary">
            Season
            <select
                aria-label="Choose NBA season"
                className="rounded-xl border border-white/20 bg-[#15181e] px-3 py-2 text-white"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            >
                {availableSeasons.map((season) => (
                    <option key={season} value={season}>
                        {season}
                    </option>
                ))}
            </select>
        </label>
    )
}
