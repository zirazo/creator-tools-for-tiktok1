import { TikTokVideoInfo } from '../types.ts';

const API_ENDPOINT = 'https://www.tikwm.com/api/';

export const fetchTikTokVideo = async (url: string): Promise<TikTokVideoInfo> => {
  if (!url.includes('tiktok.com')) {
    throw new Error('Invalid TikTok URL. Please provide a valid link.');
  }

  try {
    const apiResponse = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!apiResponse.ok) {
      throw new Error(`API request failed with status: ${apiResponse.status}`);
    }

    const result = await apiResponse.json();

    // tikwm.com returns code 0 for success
    if (result.code !== 0 || !result.data) {
      throw new Error(result.msg || 'Failed to retrieve video data from the API. The video might be private or unavailable.');
    }

    const data = result.data;

    if (!data.play || !data.author) {
        throw new Error('The API returned incomplete data. Please try another video.');
    }

    const videoData: TikTokVideoInfo = {
      videoId: data.id,
      description: data.title,
      author: {
        nickname: data.author.unique_id || data.author.nickname,
        avatar: data.author.avatar,
      },
      cover: data.cover,
      downloadLinks: {
        no_watermark_hd: data.hdplay || data.play, // Fallback to SD if HD is not available
        no_watermark: data.play,
        watermark: data.wmplay,
        audio_only: data.music,
      },
      music: {
        title: data.music_info.title,
        author: data.music_info.author,
      },
    };
    return videoData;

  } catch (err) {
    console.error("tikwm.com API call failed:", err);
    if (err instanceof Error) {
        throw new Error(err.message);
    }
    throw new Error("An unknown error occurred while fetching video details.");
  }
};
