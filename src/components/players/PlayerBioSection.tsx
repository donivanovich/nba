import type { Player } from '#/types/Player'
import PlayerBioCard from './PlayerBioCard'

interface PlayerBioSectionProps {
    player: Player
}

export default function PlayerBioSection({
    player,
}: PlayerBioSectionProps) {
    const bio = [
        { label: 'ROLE', value: player.status },
        { label: 'FULL NAME', value: player.fullname },
        { label: 'BORN', value: player.dateOfBirth },
        { label: 'BIRTHPLACE', value: player.city },
        { label: 'WEIGHT', value: `${player.weight} lb` },
        { label: 'HEIGHT', value: player.height },
        { label: 'DOMINANT HAND', value: player.dominantHand },
        { label: 'NBA DEBUT', value: player.nbaDebutYear },
        { label: 'EXPERIENCE', value: `${player.nbaExperience} years` },
    ]

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl font-black uppercase">
                Player bio
            </h2>

            <img
                src={player.flag}
                alt={player.country}
                className="h-7 w-12 rounded-sm object-cover"
            />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {bio.map((item) => (
                    <PlayerBioCard
                        key={item.label}
                        label={item.label}
                        value={item.value}
                    />
                ))}
            </div>
        </section>
    )
}