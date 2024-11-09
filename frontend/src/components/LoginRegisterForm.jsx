import React, { useState } from 'react';

const LoginRegisterForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                    {isLogin ? 'Login' : 'Register'}
                </h2>
                <form>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm mb-2">Username</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                        />
                    </div>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm mb-2">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#F7C275]"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-[#F7C275] text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}
                        <button
                            onClick={toggleForm}
                            className="text-[#F7C275] hover:underline ml-1"
                        >
                            {isLogin ? 'Register' : 'Login'}
                        </button>
                    </p>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <a href="#" className="text-gray-500 mx-2 hover:text-[#F7C275] transition duration-200">
                        <i className="fab fa-google text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-500 mx-2 hover:text-[#F7C275] transition duration-200">
                        <i className="fab fa-facebook text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-500 mx-2 hover:text-[#F7C275] transition duration-200">
                        <i className="fab fa-twitter text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterForm;
