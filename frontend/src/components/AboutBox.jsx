import React from 'react';

const AboutBox = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-gray-800 mb-4">
                <h2 className="text-3xl font-semibold text-center text-[#F7C275] mb-6">
                    About Darshan: Pavitrata Ka Safar
                </h2>
                <p className="text-center text-gray-600 mb-4">
                    Darshan is a pioneering tourism tech platform focused on enhancing spiritual journeys across India. Our
                    mission is to empower pilgrims with a seamless travel experience by integrating cultural, historical, and logistical insights into a single, user-friendly platform.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-inner">
                    <h3 className="text-2xl font-semibold mb-4 text-[#F7C275]">Our Mission</h3>
                    <p>
                        We strive to connect pilgrims with India's rich spiritual heritage through innovative technology, creating meaningful travel experiences. By centralizing essential travel information, we aim to ease planning and allow travelers to fully immerse themselves in their spiritual journeys.
                    </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <h3 className="text-2xl font-semibold mb-4 text-[#F7C275]">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>One-Stop Solution:</strong> Personalized itineraries tailored to budget and duration.</li>
                        <li><strong>Interactive Maps:</strong> Virtual exploration of key pilgrimage sites.</li>
                        <li><strong>Local Vendor Listings:</strong> Recommendations for shops and services nearby.</li>
                        <li><strong>Transportation Information:</strong> Real-time fares and details for local transit options.</li>
                        <li><strong>Hotel Assurance:</strong> Detailed hotel listings with pictures, ratings, and availability.</li>
                        <li><strong>Event Calendars:</strong> Cultural event highlights to help plan visits around festivals.</li>
                        <li><strong>Online Rituals:</strong> Book pujas and receive blessings remotely from sacred temples.</li>
                        <li><strong>Devotional Content:</strong> Access playlists of bhajans, aartis, and mantras for spiritual engagement.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;
