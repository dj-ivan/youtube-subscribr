import { Channel } from './channel.model';
export class ChannelResponse {
    kind: string; // "youtube#channelListResponse",
    etag: string; //"\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/OKF9IKHLTu78S7mVg_DkO8nVi3o\"",
    pageInfo: {
      totalResults: number; //1,
      resultsPerPage: number; // 1
    };
    items: Channel[];
  }