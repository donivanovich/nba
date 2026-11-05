export function getNBAExperience(
    nbaDebut: string | null,
    now = new Date(),
): string {
    if (!nbaDebut) return 'Rookie'

    const [month, day, year] = nbaDebut.split('/').map(Number)
    const debutDate = new Date(year, month - 1, day)

    if (
        !month ||
        !day ||
        !year ||
        debutDate.getFullYear() !== year ||
        debutDate.getMonth() !== month - 1 ||
        debutDate.getDate() !== day ||
        debutDate > now
    ) {
        return 'Rookie'
    }

    let years = now.getFullYear() - year
    const anniversary = new Date(now.getFullYear(), month - 1, day)
    if (anniversary > now) years -= 1

    return years < 1 ? 'Rookie' : `${years} years`
}
