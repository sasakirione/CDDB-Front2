export type album = {
    title: String
    releaseDate: String
    label?: number
    albumType: number
    recordNumber?: string
    albumVersion?: string
    discs: albumDisc[]
}

export type album2 = {
    title: String
    releaseDate: String
    label: String
    albumType: String
    recordNumber?: string
    albumVersion?: string
    discs: albumDisc[]
}

export type albumSongs = {
    discNumber: number
    trackNumber: number
    title: String
    artist: String
    artistId: number
    word: creator2[]
    composer: creator2[]
    arranger: creator2[]
    originalId: number
}

export const creator2 = {
    type: String,
    name: String,
    id: Number
}

export type albumDisc = {
    discNumber: number
    discTitle: string
    cddbId: string
}

export type albumListRow = {
    first: number,
    second: string
}