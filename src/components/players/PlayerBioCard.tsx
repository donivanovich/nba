interface PlayerBioCardProps {
    label: string
    value: string | number
}

export default function PlayerBioCard({
    label,
    value,
}: PlayerBioCardProps) {
    return (
        <div className="flex min-h-16 flex-col justify-center gap-2 rounded-xl border border-[#30343d] bg-[#15181e] px-4 py-3">
            <span className="text-[10px] font-semibold tracking-widest text-[#8290aa]">
                {label}
            </span>

            <span className="text-sm font-bold">
                {value}
            </span>
        </div>
    )
}