import { motion } from "framer-motion";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineAssignment } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { IoLogOutOutline } from "react-icons/io5";

const navLinks = [
    { to: "/dashboard", label: "Dashboard", icon: <LuLayoutDashboard /> },
    { to: "/courses", label: "Courses", icon: <LuBookOpenCheck /> },
    { to: "/results", label: "Results", icon: <MdOutlineAssignment /> },
    { to: "/attendance", label: "Attendance", icon: <IoMdCheckmarkCircleOutline /> },
    { to: "/login", label: "Logout", icon: <IoLogOutOutline /> },
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
        <div className="mb-8 text-2xl font-bold text-[var(--green)] tracking-wide">DevXcript</div>
        <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                        `flex text-lg items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 border-1  border-transparent  ${isActive ? "bg-[var(--green)]/10 text-[var(--green)] border-[var(--borderColor)]!" : "hover:bg-gray-100 text-gray-600"
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
