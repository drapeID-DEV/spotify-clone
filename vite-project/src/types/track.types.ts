import type { IArtist } from "./artist.types";

export interface ITrack {
    name: string,
    file: string,
    duration: number,
    artist: IArtist,
}