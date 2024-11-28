import { motion } from 'framer-motion';
import { Bus, Clock, MapPin, Users } from 'lucide-react';

export function BusRoutePage() {
  const routes = [
    {
      id: 1,
      name: 'Route A - North City',
      driver: 'Ram Bahadur',
      phone: '+977-9841234567',
      capacity: 40,
      stops: [
        { time: '7:00 AM', location: 'Chabahil Chowk' },
        { time: '7:15 AM', location: 'Bouddha' },
        { time: '7:30 AM', location: 'Jorpati' },
        { time: '7:45 AM', location: 'School' },
      ],
    },
    {
      id: 2,
      name: 'Route B - South City',
      driver: 'Shyam Kumar',
      phone: '+977-9847654321',
      capacity: 35,
      stops: [
        { time: '7:00 AM', location: 'Satdobato' },
        { time: '7:20 AM', location: 'Lagankhel' },
        { time: '7:35 AM', location: 'Kupondole' },
        { time: '7:50 AM', location: 'School' },
      ],
    },
    {
      id: 3,
      name: 'Route C - East City',
      driver: 'Hari Prasad',
      phone: '+977-9845678901',
      capacity: 38,
      stops: [
        { time: '7:10 AM', location: 'Koteshwor' },
        { time: '7:25 AM', location: 'Tinkune' },
        { time: '7:40 AM', location: 'New Baneshwor' },
        { time: '7:55 AM', location: 'School' },
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
        <h1 className="text-3xl font-bold mb-4">School Bus Routes</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our school provides safe and reliable transportation services with experienced
          drivers and well-maintained buses.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, index) => (
          <motion.div
            key={route.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold">{route.name}</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Users className="w-5 h-5" />
                  <span>Capacity: {route.capacity} students</span>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Driver Information:</p>
                  <p className="text-gray-600 dark:text-gray-300">{route.driver}</p>
                  <p className="text-gray-600 dark:text-gray-300">{route.phone}</p>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Bus Stops:</p>
                  <div className="space-y-2">
                    {route.stops.map((stop, stopIndex) => (
                      <div
                        key={stopIndex}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <div className="flex items-center gap-2 min-w-[100px]">
                          <Clock className="w-4 h-4" />
                          <span>{stop.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{stop.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                View on Map
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4">Important Notes:</h3>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>
              Students should be at their designated stops 5 minutes before the scheduled
              time.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>
              Bus routes and timings may be adjusted during adverse weather conditions.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>
              Parents will be notified via SMS in case of any delays or changes in
              schedule.
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}