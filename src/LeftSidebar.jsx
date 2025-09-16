import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
    { to: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { to: "/courses", label: "Courses", icon: "menu_book" },
    { to: "/results", label: "Results", icon: "assignment" },
    { to: "/attendance", label: "Attendance", icon: "check_box" },
    { to: "/login", label: "Logout", icon: "loginout" },
];

const sidebarVariants = {
    hidden: { x: -250, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
};
motion
const LeftSidebar = () => (
    <motion.aside
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={sidebarVariants}
        className="h-full flex flex-col bg-white border-r border-gray-200 p-4 min-w-[16rem]"
    >
        <div className="mb-8 text-2xl font-bold text-orange-500 tracking-wide">DevXcript</div>
        <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? "bg-orange-100 text-orange-600" : "hover:bg-gray-100 text-gray-700"
                        }`
                    }
                >
                    <span className="material-icons text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                </NavLink>
            ))}
        </nav>
    </motion.aside>
);

export default LeftSidebar;
