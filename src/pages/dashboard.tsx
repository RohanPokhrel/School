import { motion } from 'framer-motion';
import { useAuthStore } from '../store/auth-store';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const attendanceData = [
  { month: 'Jan', attendance: 95 },
  { month: 'Feb', attendance: 98 },
  { month: 'Mar', attendance: 92 },
  { month: 'Apr', attendance: 96 },
  { month: 'May', attendance: 94 },
];

export function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <div className="flex items-center gap-4 mb-6">
          <img
            src={user?.profileUrl || 'https://via.placeholder.com/100'}
            alt={user?.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Symbol Number: {user?.symbolNumber}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Attendance Rate</h3>
            <p className="text-2xl font-bold text-blue-600">95%</p>
          </div>
          <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Current Grade</h3>
            <p className="text-2xl font-bold text-green-600">A</p>
          </div>
          <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Activities</h3>
            <p className="text-2xl font-bold text-purple-600">8</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-bold mb-4">Attendance Overview</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}