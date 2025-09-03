
import React from 'react';

const PageSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tiktok-blue to-tiktok-red mb-3">{title}</h2>
        <div className="text-gray-300 space-y-4 text-sm md:text-base">{children}</div>
    </div>
);

export const TermsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
            <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
            
            <PageSection title="1. Acceptance of Terms">
                <p>By accessing and using Video Insights ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.</p>
            </PageSection>

            <PageSection title="2. Description of Service">
                <p>The Service provides users with the ability to view public metadata and save publicly available content from the TikTok platform for offline viewing and analysis. The Service is an independent tool and is not affiliated with, sponsored by, or endorsed by TikTok or its parent company, ByteDance Ltd.</p>
            </PageSection>

            <PageSection title="3. User Responsibilities">
                <p>You agree to use the Service in compliance with all applicable local, state, national, and international laws, rules, and regulations. You are solely responsible for the content you choose to view and save using the Service.</p>
                <p>You acknowledge that content on TikTok is protected by copyright and other intellectual property laws. You agree to respect the rights of content creators and will not use the Service to infringe upon any copyright, trademark, or other proprietary rights. Saving content for personal, non-commercial use may be permissible, but any other use, including redistribution, may require explicit permission from the copyright holder.</p>
            </PageSection>
            
            <PageSection title="4. Disclaimer of Warranties">
                <p>The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free, nor do we make any warranty as to the results that may be obtained from the use of the Service.</p>
            </PageSection>

            <PageSection title="5. Limitation of Liability">
                 <p>In no event shall Video Insights or its owners be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or the inability to use the service or for the cost of procurement of substitute goods and services.</p>
            </PageSection>

            <PageSection title="6. Changes to Terms">
                <p>We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review this page periodically. Your continued use of the Service after any such change constitutes your acceptance of the new Terms.</p>
            </PageSection>
        </div>
    );
};