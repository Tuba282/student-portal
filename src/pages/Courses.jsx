
import { FiUser, FiBookOpen, FiBarChart2, FiCalendar } from "react-icons/fi";
import {
    Card,
} from "../shadcn-components/ui/card"
import { FaBookOpen } from "react-icons/fa";
import { motion as Motion } from 'framer-motion';

const courses = [
    {
        id: 1,
        title: "Web Application Development",
        code: "CSSE3143",
        instructor: "Asad Kamal",
        credits: 3,
        grade: "view progress",
        attendance: 86.0,
        status: "Active",
    },
    {
        id: 2,
        title: "Operating Systems - Lab",
        code: "CSCS3551",
        instructor: "Qaisar Aslam",
        credits: 1,
        grade: "view progress",
        attendance: 90.0,
        status: "Active",
    },
    {
        id: 3,
        title: "Introduction to Software Engineering",
        code: "CSSE3113",
        instructor: "Muhammad Basit Ali Gillani",
        credits: 3,
        grade: "view progress",
        attendance: 79.0,
        status: "Active",
    },
    {
        id: 4,
        title: "Operating Systems",
        code: "CSCS3553",
        instructor: "Dr Adnan Ghafoor",
        credits: 3,
        grade: "view progress",
        attendance: 81.0,
        status: "Active",
    },
];

export default function Courses() {
    return (
        <div className="w-full mt-5">

            <Card className="p-6 shadow-md rounded-2xl border-[1px] border-[var(--borderColor)]">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                            <FaBookOpen className="w-5 h-5 text-[var(--green)]" />
                            Current Courses
                        </h2>
                        <p className="text-sm text-gray-500">
                            Spring 2025 • {courses.length} Enrolled Courses
                        </p>
                    </div>
                </div>

                {/* Course Grid */}
                <Motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.08 } }
                    }}
                >
                    {courses.length === 0 ? (
                        <div className="col-span-full p-6 text-center text-gray-500">No courses enrolled.</div>
                    ) : (
                        courses.map((c) => (
                            <Motion.div
                                key={c.id}
                                className="bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200 overflow-hidden"
                                variants={{
                                    hidden: { opacity: 0, y: 8 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="bg-[var(--borderColor)] p-3 text-teal-700">
                                    <h4 className="font-semibold text-sm line-clamp-2 mb-2 min-h-[2rem]">{c.title}</h4>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium opacity-90">{c.code}</span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">{c.status}</span>
                                    </div>
                                </div>

                                <div className="p-3 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <FiUser className="text-gray-500 flex-shrink-0" aria-hidden="true" />
                                        <span className="text-sm text-gray-700 line-clamp-1" title={c.instructor}>{c.instructor}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FiBookOpen className="text-gray-500 flex-shrink-0" aria-hidden="true" />
                                        <span className="text-sm text-gray-600">Credits: </span>
                                        <span className="text-sm font-semibold text-teal-600">{c.credits}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FiBarChart2 className="text-gray-500 flex-shrink-0" aria-hidden="true" />
                                        <span className="text-sm text-gray-600">Grade: </span>
                                        <button className="text-sm cursor-pointer text-teal-600 hover:text-teal-700 font-medium hover:underline">{c.grade}</button>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FiCalendar className="text-gray-500 flex-shrink-0" aria-hidden="true" />
                                        <span className="text-sm text-gray-600">Attendance: </span>
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium border ${c.attendance >= 85 ? 'text-green-600 bg-green-50 border-green-200' : c.attendance >= 80 ? 'text-yellow-600 bg-yellow-50 border-yellow-200' : 'text-red-600 bg-red-50 border-red-200'}`}>
                                            {c.attendance}%
                                        </span>
                                    </div>

                                </div>
                            </Motion.div>
                        ))
                    )}
                </Motion.div>
            </Card>
        </div>
    );
}
