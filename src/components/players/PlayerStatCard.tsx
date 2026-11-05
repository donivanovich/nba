interface PlayerStatCardProps {
    label: string
    value: number
    decimals?: number
}

export default function PlayerStatCard({
    label,
    value,
    decimals = 1,
}: PlayerStatCardProps) {
    return (
        <div className="flex min-h-20 flex-col items-center justify-center rounded-xl border border-[#30343d] bg-[#15181e] p-4">
            <span className="text-3xl font-black leading-none">
                {value.toFixed(decimals)}
            </span>

            <span className="mt-2 text-[10px] font-semibold tracking-widest text-[#8c9bb7]">
                {label}
            </span>
        </div>
    )
}