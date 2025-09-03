
import React from 'react';
import { Page } from '../App.tsx';
import { TikTokLogo } from './icons.tsx';

interface HeaderProps {
    setCurrentPage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
    return (
        <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 group">
                        <TikTokLogo className="w-8 h-8 md:w-10 md:h-10 transform transition-transform group-hover:scale-110"/>
                        <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-tiktok-blue to-tiktok-red">
                            Video Insights
                        </span>
                    </button>
                    <nav className="flex items-center gap-4 text-sm md:text-base">
                        <button onClick={() => setCurrentPage('home')} className="text-gray-300 hover:text-white transition-colors">Home</button>
                        <button onClick={() => setCurrentPage('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}