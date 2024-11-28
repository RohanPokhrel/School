import { motion } from 'framer-motion';
import { Book, Clock, UserCheck, Shirt, Award, X } from 'lucide-react';

export function RulesPage() {
  const rules = [
    {
      icon: Clock,
      title: 'Attendance and Punctuality',
      rules: [
        'Students must arrive at school by 9:45 AM',
        'Minimum 75% attendance is mandatory',
        'Early departure requires written permission',
      ],
    },
    {
      icon: Shirt,
      title: 'Uniform and Appearance',
      rules: [
        'Complete school uniform is mandatory',
        'Proper grooming and neat appearance required',
        'School ID card must be worn at all times',
      ],
    },
    {
      icon: UserCheck,
      title: 'Behavior and Discipline',
      rules: [
        'Respect all teachers and staff members',
        'No bullying or harassment will be tolerated',
        'Maintain silence in classrooms and corridors',
      ],
    },
    {
      icon: Book,
      title: 'Academic Conduct',
      rules: [
        'Complete all assignments on time',
        'No cheating or plagiarism allowed',
        'Bring required textbooks and materials',
      ],
    },
    {
      icon: Award,
      title: 'Examinations',
      rules: [
        'Attendance in all examinations is compulsory',
        'Medical certificate required for exam absence',
        'Follow all examination hall rules strictly',
      ],
    },
    {
      icon: X,
      title: 'Prohibited Items',
      rules: [
        'Mobile phones during class hours',
        'Valuable items and jewelry',
        'Any items that may cause harm',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-4">Rules and Regulations</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our rules are designed to create a safe, respectful, and productive learning
          environment for all students.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rules.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <category.icon className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>
            <ul className="space-y-2">
              {category.rules.map((rule, ruleIndex) => (
                <li key={ruleIndex} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-300">{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg text-center"
      >
        <p className="text-gray-600 dark:text-gray-300">
          Failure to comply with these rules may result in disciplinary action.
          For any clarifications, please contact the school administration.
        </p>
      </motion.div>
    </div>
  );
}