import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
    const [showLeft, setShowLeft] = useState(true);
    const [showRight, setShowRight] = useState(false);
    motion
    return (

        <div className="flex h-screen bg-gray-50">
            {/* Left Sidebar */}
            <AnimatePresence>
                {showLeft && (
                    <motion.div
                        initial={{ x: -250, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -250, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="z-20 w-64 min-w-[16rem] bg-white border-r border-gray-200 hidden md:block"
                    >
                        <LeftSidebar />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sidebar Toggle Button (Mobile) */}
            <button
                className="absolute top-4 left-4 z-30 md:hidden bg-white p-2 rounded shadow"
                onClick={() => setShowLeft((prev) => !prev)}
            >
                <span className="material-icons">menu</span>
            </button>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
                    <h1 className="text-xl font-bold">Dashboard</h1>
                    <button
                        className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200"
                        onClick={() => setShowRight((prev) => !prev)}
                    >
                        <span className="material-icons">notifications</span>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                </div>
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>

            {/* Right Sidebar (Notifications) */}
            <AnimatePresence>
                {showRight && (
                    <motion.div
                        initial={{ x: 250, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 250, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="z-20 w-80 min-w-[20rem] bg-white border-l border-gray-200 fixed right-0 top-0 h-full shadow-lg"
                    >
                        <RightSidebar onClose={() => setShowRight(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Layout;
