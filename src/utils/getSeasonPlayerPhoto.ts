export function getSeasonPlayerPhoto(photo: string, season: string): string {
    const legacyPlayerPhotoPrefix = '/images/players/'

    if (photo.startsWith(legacyPlayerPhotoPrefix)) {
        return photo.replace(
            legacyPlayerPhotoPrefix,
            `/images/seasons/${season}/players/`,
        )
    }

    return photo
}
