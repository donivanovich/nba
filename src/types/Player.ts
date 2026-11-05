export interface Player {
    id: number
    teamId: number
    name: string
    surname: string
    fullname: string
    number: number
    position: string
    status: string
    height: string
    weight: number
    dateOfBirth: string
    city: string
    country: string
    nbaDebut: string | null
    dominantHand: string
    photo: string
    flag: string
}
