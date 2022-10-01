export type album = {
    title: String
    releaseDate: String
    label?: number
    albumType: number
    recordNumber?: string
    albumVersion?: string
    discs: albumDisc[]
}

export type albumDisc = {
    discNumber: number
    discTitle: string
    cddbId: string
}