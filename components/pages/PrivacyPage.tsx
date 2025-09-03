
import React from 'react';

const PageSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tiktok-blue to-tiktok-red mb-3">{title}</h2>
        <div className="text-gray-300 space-y-4 text-sm md:text-base">{children}</div>
    </div>
);

export const PrivacyPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <p className="text-center text-gray-500 mb-8 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>

            <PageSection title="Introduction">
                <p>Video Insights ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information when you use our website ("the Service").</p>
            </PageSection>

            <PageSection title="Information We Collect">
                <p>We aim to collect as little information as possible to provide you with a functional service.</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Log Data:</strong> When you use our service, our servers automatically record information that your browser sends. This may include information such as your computer's IP address, browser type, the webpage you were visiting, and other statistics. This data is used for analytics and to improve the service.</li>
                    <li><strong>Submitted URLs:</strong> We process the TikTok URLs you submit to our service to fetch the requested video metadata. We do not store these URLs in a database associated with any personal identifiers.</li>
                </ul>
            </PageSection>

            <PageSection title="Use of Cookies">
                <p>We may use cookies to ensure the proper functioning of our website. A cookie is a small file placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                <p>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-tiktok-blue hover:underline">Ads Settings</a>.</p>
            </PageSection>

            <PageSection title="Third-Party Services">
                 <p>We may use third-party services, such as Google AdSense for advertising and analytics providers. These third parties may have their own privacy policies addressing how they use such information.</p>
            </PageSection>
            
            <PageSection title="Data Security">
                <p>We value your trust in providing us your information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
            </PageSection>

            <PageSection title="Changes to This Privacy Policy">
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            </PageSection>
        </div>
    );
};