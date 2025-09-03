
import React, { useState } from 'react';
import { TikTokVideoInfo } from '../types.ts';
import { DownloadIcon, MusicIcon } from './icons.tsx';

interface VideoPreviewCardProps {
  videoInfo: TikTokVideoInfo;
}

const DownloadButton: React.FC<{ href: string; label: string; quality: string; videoId: string; authorNickname: string; }> = ({ href, label, quality, videoId, authorNickname }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            const response = await fetch(href);
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.statusText}`);
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            
            const fileExtension = href.split('.').pop() || (label === 'Audio Only' ? 'mp3' : 'mp4');
            const fileName = `${authorNickname}_${videoId}_${quality}.${fileExtension}`.replace(/\s/g, '_');
            a.download = fileName;

            document.body.appendChild(a);
            a.click();
            
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download error:', error);
            alert('Could not download the file. The resource might be unavailable or blocked by your browser.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex-1 bg-gray-700 hover:bg-tiktok-blue hover:text-tiktok-black text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-tiktok-blue focus:ring-offset-2 focus:ring-offset-gray-800 text-center disabled:opacity-75 disabled:cursor-wait disabled:scale-100"
        >
            <div className="flex items-center justify-center gap-2">
                 {isDownloading ? (
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    <DownloadIcon className="w-5 h-5" />
                )}
                <div>
                    <div>{isDownloading ? 'Downloading...' : label}</div>
                    <div className="text-xs font-normal opacity-75">{quality}</div>
                </div>
            </div>
        </button>
    );
};


export const VideoPreviewCard: React.FC<VideoPreviewCardProps> = ({ videoInfo }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-1 flex justify-center">
            <img 
                src={videoInfo.cover} 
                alt="Video Cover" 
                className="w-full max-w-[200px] md:max-w-full object-cover rounded-lg shadow-md"
            />
        </div>

        <div className="md:col-span-2 flex flex-col justify-between">
            <div>
                <div className="flex items-center mb-3">
                    <img src={videoInfo.author.avatar} alt={videoInfo.author.nickname} className="w-12 h-12 rounded-full mr-3 border-2 border-gray-600"/>
                    <span className="font-semibold text-lg">@{videoInfo.author.nickname}</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{videoInfo.description}</p>
                <div className="flex items-center text-gray-400 text-sm bg-gray-700/50 rounded p-2">
                    <MusicIcon className="w-4 h-4 mr-2 flex-shrink-0"/>
                    <span className="truncate">{videoInfo.music.title}</span>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-center">Save a Copy</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                    <DownloadButton href={videoInfo.downloadLinks.no_watermark_hd} label="Video" quality="HD" videoId={videoInfo.videoId} authorNickname={videoInfo.author.nickname}/>
                    <DownloadButton href={videoInfo.downloadLinks.no_watermark} label="Video" quality="SD" videoId={videoInfo.videoId} authorNickname={videoInfo.author.nickname}/>
                    <DownloadButton href={videoInfo.downloadLinks.audio_only} label="Audio Only" quality="MP3" videoId={videoInfo.videoId} authorNickname={videoInfo.author.nickname}/>
                </div>
                <p className="text-xs text-gray-500 text-center mt-3">Please respect the copyright of the original creator.</p>
            </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};