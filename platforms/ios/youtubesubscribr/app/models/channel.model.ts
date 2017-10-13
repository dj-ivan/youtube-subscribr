import { Snippet } from './snippet.model';
import { Statistics } from './statistics.model';
export class Channel {
        kind: string; // "youtube#channel",
        etag: string; // "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/eHRVpSzSn0Mca4RZ4N1_ZvvOx04\"",
        id: string; // "UCMwJaPQPC6yrIBOv9NgzIuA",
        snippet: Snippet;
        contentDetails: {
          relatedPlaylists: {
            likes: string; // "LLMwJaPQPC6yrIBOv9NgzIuA",
            uploads: string; // "UUMwJaPQPC6yrIBOv9NgzIuA",
            watchHistory: string; // "HL",
            watchLater: string; // "WL"
          }
        };
        statistics: Statistics;
}