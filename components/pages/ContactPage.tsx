
import React from 'react';
import { TikTokLogo } from '../icons.tsx';

export const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-2xl text-center">
            <div className="flex justify-center mb-6">
                <TikTokLogo className="w-20 h-20" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-400 mb-8">
                Have a question, feedback, or a business inquiry? We'd love to hear from you.
            </p>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
                <h2 className="text-xl font-semibold mb-2">General Inquiries</h2>
                <p className="text-gray-300 mb-4">For all general questions and feedback, please reach out to us via email.</p>
                <a 
                    href="mailto:contact@example.com" 
                    className="inline-block bg-tiktok-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
                >
                    contact@example.com
                </a>
                 <p className="text-xs text-gray-500 mt-4">(Please replace with a real email address)</p>
            </div>
        </div>
    );
};