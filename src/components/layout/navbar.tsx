import { Bell, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ui/theme-toggle';
import { useAuthStore } from '../../store/auth-store';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAuthStore((state) => state.user);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">MMSS</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/admission" className="hover:text-blue-600">Admission</Link>
            <Link to="/rules" className="hover:text-blue-600">Rules</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
                <button className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>
                <ThemeToggle />
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-gray-100">
              About
            </Link>
            <Link to="/admission" className="block px-3 py-2 rounded-md hover:bg-gray-100">
              Admission
            </Link>
            <Link to="/rules" className="block px-3 py-2 rounded-md hover:bg-gray-100">
              Rules
            </Link>
            {user && (
              <Link to="/dashboard" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                Dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}