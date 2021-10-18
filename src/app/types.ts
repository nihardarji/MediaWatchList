export interface MediaItem {
    id: number
    name: string
    medium: string
    category: string
    year: string
    watchedOn: string
    isFavorite: string
}

export interface MediaItemResponse {
    mediaItems: MediaItem[]
}