import BackButton from '../shared/BackButton'

interface PlayerPageHeaderProps {
    teamName: string
}

export default function PlayerPageHeader({ teamName }: PlayerPageHeaderProps) {
    return (
        <div className="[&_button]:text-sm [&_button]:uppercase [&_button]:tracking-widest [&_svg]:h-4 [&_svg]:w-4">
            <BackButton label={teamName} />
        </div>
    )
}