import { motion } from "framer-motion";
import React from "react";

const notifications = [
  { id: 1, text: "Your result has been published." },
  { id: 2, text: "New course available: React Advanced." },
  { id: 3, text: "Invoice #1234 is due soon." },
];

const sidebarVariants = {
  hidden: { x: 250, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
};
motion
const RightSidebar = ({ onClose }) => (
  <motion.aside
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={sidebarVariants}
    className="h-full flex flex-col bg-white border-l border-gray-200 p-4 min-w-[20rem] shadow-lg relative"
  >
    <button
      className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 text-2xl"
      onClick={onClose}
      aria-label="Close notifications"
    >
      <span className="material-icons">close</span>
    </button>
    <div className="mb-6 text-xl font-bold text-orange-500">Notifications</div>
    <ul className="flex flex-col gap-4">
      {notifications.map((n) => (
        <li key={n.id} className="bg-orange-50 p-3 rounded-lg text-gray-700 shadow-sm">
          {n.text}
        </li>
      ))}
    </ul>
  </motion.aside>
);

export default RightSidebar;
