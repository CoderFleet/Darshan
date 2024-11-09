import React from "react";

const features = [
  { title: "Interactive Area Maps", description: "Explore and navigate pilgrimage sites with ease." },
  { title: "Hotel Accommodation Bookings", description: "Book accommodations with images, pricing, and reviews." },
  { title: "Car Rental & Booking", description: "Rent cars with details like car number, driver name, and contact." },
  { title: "Bus Booking", description: "Book local buses, check schedules, and buy tickets." },
  { title: "Safety Features", description: "SOS button for emergencies and offline mode for essential info." },
  { title: "Cultural & Historical Info", description: "Learn about religious sites, customs, and cultural practices." },
  { title: "Personalized Itinerary Planning", description: "Get a tailored itinerary based on budget, preferences, and duration." },
  { title: "Shopping Guide & Local Vendors", description: "Discover local shops and unique items from nearby vendors." },
  { title: "User Reviews & Social Integration", description: "Share experiences and engage with fellow travelers." },
  { title: "Event Integration", description: "Plan visits around local festivals and cultural events." },
  { title: "Real-time Language Translation", description: "Support for multiple languages for both domestic and international travelers." },
  { title: "Online Participation in Pujas & Rituals", description: "Book online pujas, get personalized blessings, and receive videos of the ceremony." },
  { title: "Chadhava (Offerings) to Temples", description: "Make online offerings at temples and receive certificates and videos." },
  { title: "Devotional Content Access", description: "Access bhajans, mantras, and aartis for spiritual engagement." },
  { title: "Access to Famous Temples", description: "Join temple rituals online, and get detailed information about timings and offerings." },
  { title: "Festivals and Events", description: "Book pujas or offerings for festivals like Ganesh Chaturthi, Diwali, and more." },
];

const Feature = () => {
  return (
    <div className="p-6 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-[#FFE6BF] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-center mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600 text-center">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Feature;
