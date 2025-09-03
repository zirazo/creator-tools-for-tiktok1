
import React, { useState, useCallback } from 'react';
import { TikTokVideoInfo } from '../../types.ts';
import { fetchTikTokVideo } from '../../services/tiktokService.ts';
import { UrlInputForm } from '../UrlInputForm.tsx';
import { VideoPreviewCard } from '../VideoPreviewCard.tsx';
import { Loader } from '../Loader.tsx';
import { ErrorMessage } from '../ErrorMessage.tsx';
import { TikTokLogo, DownloadIcon, LinkIcon, MusicIcon } from '../icons.tsx';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="flex items-center gap-4 mb-3">
            <div className="bg-gray-700 p-2 rounded-full">{icon}</div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm">{children}</p>
    </div>
);

export const HomePage: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [videoInfo, setVideoInfo] = useState<TikTokVideoInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchVideo = useCallback(async () => {
    if (!url.trim()) {
      setError('Please enter a valid TikTok URL.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setVideoInfo(null);

    try {
      const data = await fetchTikTokVideo(url);
      setVideoInfo(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <div className="flex justify-center items-center gap-4 mb-4">
          <TikTokLogo className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-tiktok-blue to-tiktok-red">
            Video Insights for TikTok
          </h1>
        </div>
        <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto">
          Paste a TikTok video URL below to analyze its metadata, discover music, and save a copy for offline viewing.
        </p>
      </header>

      <section className="max-w-2xl mx-auto">
        <UrlInputForm
          url={url}
          setUrl={setUrl}
          onSubmit={handleFetchVideo}
          isLoading={isLoading}
        />

        <div className="mt-8 min-h-[300px]">
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {videoInfo && <VideoPreviewCard videoInfo={videoInfo} />}
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16 md:mt-24">
         <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How It Works</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
                <div className="bg-tiktok-blue/20 p-4 rounded-full mb-4 border-2 border-tiktok-blue"><LinkIcon className="w-8 h-8 text-tiktok-blue"/></div>
                <h3 className="font-bold mb-2">1. Paste URL</h3>
                <p className="text-gray-400 text-sm">Copy the URL of the TikTok video you want to analyze and paste it into the input field above.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-tiktok-red/20 p-4 rounded-full mb-4 border-2 border-tiktok-red"><TikTokLogo className="w-8 h-8"/></div>
                <h3 className="font-bold mb-2">2. Fetch Data</h3>
                <p className="text-gray-400 text-sm">Click the "Fetch" button. Our tool will securely retrieve the public metadata for the video.</p>
            </div>
            <div className="flex flex-col items-center">
                 <div className="bg-gray-700 p-4 rounded-full mb-4 border-2 border-gray-500"><DownloadIcon className="w-8 h-8 text-white"/></div>
                <h3 className="font-bold mb-2">3. Analyze & Save</h3>
                <p className="text-gray-400 text-sm">View the video details, see music information, and choose to save a copy in your preferred quality.</p>
            </div>
         </div>
      </section>
      
      <section className="max-w-4xl mx-auto mt-16 md:mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard icon={<DownloadIcon className="w-6 h-6 text-tiktok-blue"/>} title="Multiple Qualities">
                Save video copies in both high-definition (HD) and standard-definition (SD) formats, completely watermark-free.
            </FeatureCard>
            <FeatureCard icon={<MusicIcon className="w-6 h-6 text-tiktok-red"/>} title="Audio Extraction">
                Need just the sound? You can save the audio from any video as a separate MP3 file. Perfect for music and sound clips.
            </FeatureCard>
            <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-tiktok-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Metadata Analysis">
                Instantly view the video's description, author information, and profile picture.
            </FeatureCard>
            <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-tiktok-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} title="Cover Art">
                See a high-quality preview of the video's cover image (thumbnail) before you save.
            </FeatureCard>
        </div>
      </section>

    </div>
  );
};