import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import { LuMenu } from "react-icons/lu";
import { FaBell } from "react-icons/fa6";
import Profile from "./pages/Profile";
import { FaUserCircle } from "react-icons/fa";

const Layout = () => {
    const [showLeft, setShowLeft] = useState(true);
    const [showRight, setShowRight] = useState(false);
    motion
    return (

        <div className="flex h-screen bg-gray-50">
            {/* Left Sidebar */}
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <LeftSidebar />
            </div>
            {/* Mobile Sidebar with overlay */}
            <AnimatePresence>
                {showLeft && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowLeft(false)}
                        />
                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: -250, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -250, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 left-0 h-full w-64 min-w-[16rem] bg-white border-r border-gray-200 z-40 md:hidden shadow-lg"
                        >
                            <LeftSidebar />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Sidebar Toggle Button (Mobile) */}
            <button
                className="absolute top-4 left-4 z-20 md:hidden bg-white p-2 rounded shadow"
                onClick={() => setShowLeft((prev) => !prev)}
            >
                <span className="material-icons"><LuMenu /></span>
            </button>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
                    <h1 className="text-xl font-bold ms-10 md:m-0">Dashboard</h1>
                    <div className="flex justify-center items-center gap-4">
                        <button
                        className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200"
                        onClick={() => setShowRight((prev) => !prev)}
                    >
                        <span className="material-icons"><FaBell className="text-[var(--green)]" /></span>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-[var(--green)] rounded-full"></span>
                    </button>
                    <Profile/>
                    </div>
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
