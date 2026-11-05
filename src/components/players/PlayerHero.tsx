import type { Player } from '#/types/Player'
import type { Team } from '#/types/Team'
import PlayerTeamLogo from './PlayerTeamLogo'

interface PlayerHeroProps {
    player: Player
    team?: Team
}

export default function PlayerHero({ player, team }: PlayerHeroProps) {
    const age = Math.floor(
        (Date.now() - new Date(player.dateOfBirth).getTime()) /
            (365.25 * 24 * 60 * 60 * 1000)
    )

    return (
        <section
            className="player-hero relative flex min-h-64 items-end overflow-hidden rounded-2xl border-b-4"
            style={{
                background: team
                    ? `linear-gradient(110deg, ${team.backgroundcolorPrimary} 60%, ${team.backgroundcolorSecondary})`
                    : '#15181e',
                borderBottomColor: team?.backgroundcolorPrimary,
            }}
        >
            <img
                src={player.photo}
                alt={player.fullname}
                className="z-10 h-64 w-[42%] object-contain object-bottom"
            />

            <div className="player-hero-copy z-10 flex flex-1 flex-col justify-center self-center py-6 pr-20">
                <div className="flex flex-wrap items-center gap-12">
                    <span className="text-5xl font-black">
                        #{player.number}
                    </span>

                    <span className="rounded-full bg-[#101216] px-4 py-2 text-xs font-bold uppercase text-white-500">
                        {player.status}
                    </span>
                </div>

                <h1 className="mt-2 text-4xl font-black uppercase leading-tight">
                    {player.name} {player.surname}
                </h1>

                <p className="mt-3 text-sm font-semibold">
                    {player.position} · {age} yrs · {player.height}
                    {team && ` · ${team.name1} ${team.name2}`}
                </p>
            </div>

            {team && <PlayerTeamLogo team={team} />}
            <img
                src={player.flag}
                alt={player.country}
                className="player-hero-flag rounded-full absolute bottom-7 right-7 h-12 w-12 object-contain"
            />
        </section>
    )
}
