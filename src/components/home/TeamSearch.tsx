interface TeamSearchProps {
    value: string
    onChange: (query: string) => void
}

export default function TeamSearch({ value, onChange }: TeamSearchProps) {
    return (
        <input aria-label="Search teams" className="w-fit rounded-4xl border border-gray-500 bg-black px-4 py-2 text-white sm:w-64" type="search" placeholder="Search team..." value={value} onChange={(event) => onChange(event.target.value)} />
    )
}
