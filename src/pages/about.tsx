import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Target, History, School } from 'lucide-react';

export function AboutPage() {
  const stats = [
    { label: 'Years of Excellence', value: '25+' },
    { label: 'Students Enrolled', value: '1,200+' },
    { label: 'Qualified Teachers', value: '80+' },
    { label: 'Success Rate', value: '95%' },
  ];

  const achievements = [
    'Best School Award 2023 - Ministry of Education',
    'National Sports Championship Winners 2022',
    'Regional Science Fair Champions 2023',
    'Outstanding Academic Performance Award',
  ];

  const facilities = [
    {
      icon: School,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art classrooms and laboratories equipped with latest technology',
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Extensive collection of books, journals, and digital resources',
    },
    {
      icon: Users,
      title: 'Sports Complex',
      description: 'Multiple sports facilities including indoor and outdoor courts',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl font-bold">About MMSS</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Shree Mahendra Secondary School has been a center of academic excellence
          since its establishment in 1998. We are committed to providing quality
          education and shaping the future leaders of tomorrow.
        </p>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
          >
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            To provide comprehensive education that nurtures intellectual curiosity,
            promotes academic excellence, and develops well-rounded individuals who
            are prepared to meet the challenges of the future.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <History className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            To be recognized as a leading educational institution that sets the
            highest standards of academic achievement, character development, and
            innovation in teaching and learning.
          </p>
        </div>
      </motion.section>

      {/* Facilities */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">Our Facilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <facility.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold">Our Achievements</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
            >
              <span className="text-blue-600 mt-1">•</span>
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="text-2xl font-bold">Want to Learn More?</h2>
        <p className="text-gray-600 dark:text-gray-300">
          We'd love to hear from you and answer any questions you may have.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </motion.section>
    </div>
  );
}