interface ShootingPercentageBarProps {
    label: string
    value: number
    primaryColor?: string
    secondaryColor?: string
}

export default function ShootingPercentageBar({
    label,
    value,
    primaryColor = '#777',
    secondaryColor = '#999',
}: ShootingPercentageBarProps) {
    const percentage = Math.min(Math.max(value, 0), 100)

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm font-semibold">
                <span>{label}</span>
                <span>{value.toFixed(1)}%</span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-[#242830]">
                <div
                    className="h-full rounded-full transition-all"
                    style={{
                        width: `${percentage}%`,
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                    }}
                />
            </div>
        </div>
    )
}