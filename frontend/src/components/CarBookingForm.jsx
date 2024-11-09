import React, { useState } from 'react';

const CarBookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        carType: 'Sedan',
        pickupLocation: '',
        dropoffLocation: '',
        pickupDate: '',
        dropoffDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking details:', formData);
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mb-4 ">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Book a Car</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Car Type</label>
                            <select
                                name="carType"
                                value={formData.carType}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                            >
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Convertible">Convertible</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Pickup Date</label>
                            <input
                                type="date"
                                name="pickupDate"
                                value={formData.pickupDate}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Pickup Location</label>
                            <input
                                type="text"
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                placeholder="Enter pickup location"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Drop-off Date</label>
                            <input
                                type="date"
                                name="dropoffDate"
                                value={formData.dropoffDate}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Drop-off Location</label>
                        <input
                            type="text"
                            name="dropoffLocation"
                            value={formData.dropoffLocation}
                            onChange={handleChange}
                            placeholder="Enter drop-off location"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#F7C275] text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200"
                    >
                        Book Car
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CarBookingForm;
