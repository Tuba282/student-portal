
import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";

const attendanceData = [
  {
    subject: "Web Development",
    total: 42,
    present: 36,
    absent: 6,
    percentage: 85.7,
  },
  {
    subject: "Object Oriented Programming",
    total: 38,
    present: 32,
    absent: 6,
    percentage: 84.2,
  },
  {
    subject: "Data Structures",
    total: 45,
    present: 41,
    absent: 4,
    percentage: 91.1,
  },
  {
    subject: "Database Systems",
    total: 40,
    present: 35,
    absent: 5,
    percentage: 87.5,
  },
  {
    subject: "Computer Networks",
    total: 35,
    present: 28,
    absent: 7,
    percentage: 80,
  },
  {
    subject: "Software Engineering",
    total: 48,
    present: 30,
    absent: 18,
    percentage: 62.5,
  },
];

// Helper function for status
const getStatus = (percentage) => {
  if (percentage >= 85) {
    return {
      label: "Good Standing",
      color: "text-green-600",
      bg: "bg-green-500",
      icon: <FaCheckCircle className="text-green-600 inline mr-1" />,
    };
  } else if (percentage >= 75) {
    return {
      label: "Below Average",
      color: "text-yellow-600",
      bg: "bg-yellow-500",
      icon: <FaExclamationTriangle className="text-yellow-600 inline mr-1" />,
    };
  } else {
    return {
      label: "Poor Attendance",
      color: "text-red-600",
      bg: "bg-red-500",
      icon: <FaTimesCircle className="text-red-600 inline mr-1" />,
    };
  }
};

export default function Attendance() {
    motion
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-2">Attendance Overview</h2>
      <p className="text-gray-500 mb-6">
        Your attendance record across all courses
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {attendanceData.map((course, index) => {
          const status = getStatus(course.percentage);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 rounded-xl border shadow hover:shadow-lg transition bg-white"
            >
              {/* Subject Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{course.subject}</h3>
                <span
                  className={`text-sm px-3 py-1 rounded-full text-white ${status.bg}`}
                >
                  {course.percentage}%
                </span>
              </div>

              {/* Stats */}
              <div className="flex justify-between text-sm font-medium mb-2">
                <p className="text-gray-600">
                  Total: <span className="font-semibold">{course.total}</span>
                </p>
                <p className="text-green-600">
                  Present: <span className="font-semibold">{course.present}</span>
                </p>
                <p className="text-red-500">
                  Absent: <span className="font-semibold">{course.absent}</span>
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
                <div
                  className={`${status.bg} h-2 rounded-full`}
                  style={{ width: `${course.percentage}%` }}
                />
              </div>

              {/* Status */}
              <p className={`text-sm font-medium flex items-center ${status.color}`}>
                {status.icon}
                {status.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
