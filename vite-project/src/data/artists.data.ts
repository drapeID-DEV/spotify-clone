import type { IArtist } from "../types/artist.types";
import { TRACKS } from "./tracks.data";

export const ARTISTS: IArtist[] = [
    {
        name: "$uicideboy$",
        tracks: [TRACKS[0], TRACKS[1], TRACKS[2], TRACKS[3], TRACKS[4], TRACKS[5]]
    },
    {
        name: "BONES",
        tracks: [TRACKS[6], TRACKS[7], TRACKS[8], TRACKS[9], TRACKS[10], TRACKS[11]]
    },
    {
        name: "The Weekend",
        tracks: [TRACKS[12], TRACKS[13], TRACKS[14], TRACKS[15], TRACKS[16], TRACKS[17]]
    }
]