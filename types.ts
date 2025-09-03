
export interface TikTokVideoInfo {
  videoId: string;
  description: string;
  author: {
    nickname: string;
    avatar: string;
  };
  cover: string;
  downloadLinks: {
    no_watermark_hd: string;
    no_watermark: string;
    watermark: string;
    audio_only: string;
  };
  music: {
    title: string;
    author: string;
  };
}
