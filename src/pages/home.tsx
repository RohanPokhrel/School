import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Bus } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Shree Mahendra Secondary School
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Empowering minds, building futures, and creating leaders of tomorrow
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/admission"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Apply Now
          </Link>
          <Link
            to="/about"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50"
          >
            Learn More
          </Link>
        </div>
      </motion.section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: GraduationCap,
            title: 'Quality Education',
            description: 'Expert faculty and modern teaching methods',
          },
          {
            icon: BookOpen,
            title: 'Rich Curriculum',
            description: 'Comprehensive academic and extracurricular programs',
          },
          {
            icon: Users,
            title: 'Small Class Size',
            description: 'Personalized attention for every student',
          },
          {
            icon: Bus,
            title: 'Transportation',
            description: 'Safe and reliable school bus service',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 dark:bg-gray-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At MMSS, we believe in nurturing not just academic excellence, but also
            character, creativity, and leadership skills. Our holistic approach to
            education ensures that every student reaches their full potential.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Discover More
          </Link>
        </div>
      </section>
    </div>
  );
}