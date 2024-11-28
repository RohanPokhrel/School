import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Calendar, TrendingUp, Award, Clock } from 'lucide-react';

const attendanceData = [
  { month: 'Jan', present: 22, absent: 1, late: 2 },
  { month: 'Feb', present: 20, absent: 2, late: 1 },
  { month: 'Mar', present: 21, absent: 2, late: 2 },
  { month: 'Apr', present: 23, absent: 0, late: 1 },
  { month: 'May', present: 21, absent: 1, late: 3 },
];

const performanceData = [
  { subject: 'Mathematics', score: 85, average: 75 },
  { subject: 'Science', score: 92, average: 78 },
  { subject: 'English', score: 88, average: 80 },
  { subject: 'Social Studies', score: 90, average: 82 },
  { subject: 'Computer', score: 95, average: 85 },
];

export function AttendancePage() {
  const calculateAttendanceRate = () => {
    const totalDays = attendanceData.reduce(
      (acc, curr) => acc + curr.present + curr.absent + curr.late,
      0
    );
    const presentDays = attendanceData.reduce((acc, curr) => acc + curr.present, 0);
    return ((presentDays / totalDays) * 100).toFixed(1);
  };

  const calculateAveragePerformance = () => {
    const total = performanceData.reduce((acc, curr) => acc + curr.score, 0);
    return (total / performanceData.length).toFixed(1);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-4">Attendance & Performance</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Track your attendance and academic performance throughout the year
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Attendance Rate</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">{calculateAttendanceRate()}%</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Average Performance</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{calculateAveragePerformance()}%</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold">Class Rank</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">5th</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold">Late Arrivals</h3>
          </div>
          <p className="text-3xl font-bold text-orange-600">9</p>
        </div>
      </motion.div>

      {/* Attendance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-bold mb-6">Monthly Attendance Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="present" fill="#2563eb" name="Present" />
              <Bar dataKey="absent" fill="#dc2626" name="Absent" />
              <Bar dataKey="late" fill="#f59e0b" name="Late" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-bold mb-6">Subject Performance</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#2563eb"
                strokeWidth={2}
                name="Your Score"
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#6b7280"
                strokeWidth={2}
                name="Class Average"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Improvement Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4">Improvement Tips</h3>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Aim to arrive at least 10 minutes before class starts</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Focus on improving Mathematics performance to match other subjects</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Consider joining study groups for collaborative learning</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}