import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    motion
    const goto = useNavigate();

    const handleLogin = () => {

        goto('/dashboard');
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                className="flex drop-shadow-xs drop-shadow-black bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
            >
                <div className="relative hidden lg:flex lg:w-[50%] p-6 justify-center items-center text-md lg:text-xl text-center md:text-left font-light tracking-wider leading-relaxed text-white bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/11836671/pexels-photo-11836671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#14B8A6] opacity-20"></div>
                    {/* Text */}
                    <div className="relative z-10">
                        DevXcript Student Portal is an online platform that provides students with a centralized hub for accessing academic resources, managing coursework, and staying updated with announcements. The portal offers streamlined tools for organizing study materials, tracking assignment deadlines, and collaborating with peers—all in a user-friendly interface designed to simplify student life.
                    </div>
                </div>
                <div className="w-full p-8 lg:w-[50%]">
                    <div className="w-full my-4 grid justify-center items-center">
                        <img src="/logo.png" alt="DevXcript Student Portal" className='w-20 h-20 md:w-30 md:h-30 mx-auto' />
                        <h1 className='font-semibold text-2xl md:text-3xl  it'>Sign in to your account</h1>
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input className="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            {/* <a href="#" className="text-xs text-gray-500">Forget Password?</a> */}
                        </div>
                        <input className="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                    </div>
                    <div className="mt-8">
                        <button onClick={handleLogin} className="bg-[#14B8A6] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#0b7669]">Login</ button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <a href="/signup" className="text-xs text-gray-500 uppercase">or sign up</a>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
export default Login;