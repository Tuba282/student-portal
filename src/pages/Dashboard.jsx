import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FaBookReader } from "react-icons/fa";
import Courses from "./Courses";
import { motion as Motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
};

function Dashboard() {

  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-4 lg:p-6">
  <Motion.div variants={containerVariants} initial="hidden" animate="show">
        {/* Header Info */}
  <Motion.div variants={itemVariants} className="flex flex-col xl:flex-row gap-6 bg-white shadow rounded-2xl p-6 mb-6">
          {/* Student Info */}
          <div className="grid sm:flex items-start sm:items-center gap-4 flex-1">
            {/* <img src="" className="w-16 h-16 rounded-full" alt="" /> */}
            <FaUser className="w-16 h-16 text-[var(--green)]" />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Student Name</h2>
              <p className="text-gray-500 text-sm sm:text-base">student-id</p>
              <p className="text-xs sm:text-sm text-gray-400">
                Enrolled in Information Technology and Computer Science
              </p>
              <span className="flex items-center w-[200px] gap-2 mt-2 px-3 py-1 text-xs sm:text-sm font-medium bg-[var(--green)]/10 text-[var(--green)] rounded-full">
                <PiGraduationCapDuotone /> BS Computer Science
              </span>
            </div>
          </div>

          {/* Stats Section */}
          <Motion.div variants={itemVariants} className="grid justify-center items-end grid-cols-2 md:grid-cols-4 gap-4 flex-1">
            <StatBox title="CGPA" value="3.23" />
            <StatBox title="Earned Credits" value="69" />
            <StatBox title="Total Credits" value="133" />
            <StatBox title="In Progress" value="10" />
          </Motion.div>
        </Motion.div>

        {/* Progress Section */}
  <Motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ProgressCard
            title="Credit Hours"
            percent={52}
            detail1="Completed 69 hrs"
            detail2="Remaining 64 hrs"
          />
          <ProgressCard
            title="GPA"
            percent={84}
            detail1="Current GPA: 3.37"
            detail2="Letter Grade: B+"
          />
  </Motion.div>

        {/* Classes Section */}
        <Motion.div variants={itemVariants}>
          <TodayClasses />
        </Motion.div>

        {/* Courses Section */}
        <Motion.div variants={itemVariants} className="mt-6">
          <Courses />
        </Motion.div>
      </Motion.div>
    </div>
  );
}

// Components 

function StatBox({ title, value }) {
  return (
    <div className="h-[80px] bg-gray-100 rounded-lg p-4 text-center">
      <h4 className="text-gray-500 text-xs">{title}</h4>
      <p className="text-lg md:text-xl font-bold">{value}</p>
    </div>
  );
}

function ProgressCard({ title, percent, detail1, detail2 }) {
  return (
    <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
      <h4 className="font-medium mb-4 text-sm md:text-base">{title}</h4>
      <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="50"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            cx="56"
            cy="56"
            r="50"
            stroke="#3b82f6"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray="314"
            strokeDashoffset={314 - (percent / 100) * 314}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-semibold text-sm md:text-lg">
          {percent}%
        </span>
      </div>
      <p className="text-gray-500 text-xs md:text-sm">{detail1}</p>
      <p className="text-gray-500 text-xs md:text-sm">{detail2}</p>
    </div>
  );
}

function TodayClasses() {
  const [showAll, setShowAll] = useState(false);
  const classes = [
    {
      subject: "Web Application Development",
      code: "CSSE3143",
      teacher: "Asad Kamal",
      time: "09:00 AM - 10:30 AM",
      type: "Lab",
      location: "Lab 1",
    },
    {
      subject: "Operating Systems",
      code: "CSCS3553",
      teacher: "Dr. Adeel Shafqat",
      time: "11:00 AM - 12:30 PM",
      type: "Lecture",
      location: "Room 204",
    },
    // Extra classes (for View Full Schedule)
    {
      subject: "Database Systems",
      code: "CSCS3221",
      teacher: "Prof. Ali Raza",
      time: "01:00 PM - 02:30 PM",
      type: "Lecture",
      location: "Room 105",
    },
    {
      subject: "Software Engineering",
      code: "CSCS4112",
      teacher: "Dr. Ayesha Khan",
      time: "03:00 PM - 04:30 PM",
      type: "Lecture",
      location: "Room 110",
    },
  ];

  // Pehle do classes hamesha visible
  const visibleClasses = showAll ? classes : classes.slice(0, 2);

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--green)]"><SlCalender className="text-x " /> Today's Classes</h3>

      <div className="space-y-4">
        {visibleClasses.map((cls, idx) => (
          <ClassCard key={idx} {...cls} />
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 text-right text-[var(--green)] text-xs md:text-sm hover:underline"
      >
        {showAll ? "Hide Schedule ↑" : "View Full Schedule →"}
      </button>
    </div>
  );
}

// ✅ Class Card Component (responsive + styled)
function ClassCard({ subject, code, teacher, time, type }) {
  return (
    <div className="border-1 border-[var(--borderColor)]! rounded-xl p-4 hover:bg-[var(--borderColor)]/50 transition flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <div className="flex gap-2 mb-2 items-center">
          <span className="p-2 bg-[var(--borderColor)] rounded-md"><FaBookReader  className="font-semibold text-base md:text-lg text-[var(--green)]"/></span>
          <div>
            <h4 className="font-semibold text-base md:text-lg text-[var(--green)]">{subject}</h4>
            <p className="text-xs text-gray-500">{code}</p>
          </div>
        </div>
        <p className="text-xs ps-10 text-gray-500">{teacher}</p>
        <p className="text-xs ps-10 text-gray-500">{time}</p>
      </div>
      <div className="flex  flex-col items-center justify-between sm:justify-end gap-3">
        <span className="px-3 py-1 text-xs rounded-lg bg-[var(--borderColor)] text-[var(--green)]">
          {type}
        </span>
      </div>
    </div>
  );
}



export default Dashboard;



