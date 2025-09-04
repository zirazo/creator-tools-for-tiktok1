
import React from 'react';
import { Page } from '../App.tsx';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 mt-16">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="font-bold text-lg text-white mb-2">TIKTOK VIDEO DOWNLOADER</h3>
                        <p className="text-gray-400 text-sm">Analyze and explore TikTok video metadata with ease.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-white mb-2">Legal</h3>
                        <ul className="space-y-2">
                            <li><button onClick={() => setCurrentPage('terms')} className="text-gray-400 hover:text-tiktok-blue text-sm transition-colors">Terms of Service</button></li>
                            <li><button onClick={() => setCurrentPage('privacy')} className="text-gray-400 hover:text-tiktok-blue text-sm transition-colors">Privacy Policy</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-white mb-2">Contact</h3>
                         <ul className="space-y-2">
                            <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-tiktok-blue text-sm transition-colors">Contact Us</button></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} TIKTOK VIDEO DOWNLOADER. All rights reserved.</p>
                    <p className="mt-2">This service is not affiliated with TikTok or ByteDance Ltd. Please respect the intellectual property rights of the content owners.</p>
                </div>
            </div>
        </footer>
    );
};
