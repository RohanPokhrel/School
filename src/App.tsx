import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/layout/navbar';
import { AuthProvider } from './providers/auth-provider';
import { LoginPage } from './pages/auth/login';
import { RegisterPage } from './pages/auth/register';
import { ForgotPasswordPage } from './pages/auth/forgot-password';
import { HomePage } from './pages/home';
import { DashboardPage } from './pages/dashboard';
import { RulesPage } from './pages/rules';
import { BusRoutePage } from './pages/bus-route';
import { AttendancePage } from './pages/attendance';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { AdmissionPage } from './pages/admission';
import { ComplaintPage } from './pages/complaint';
import { ProtectedRoute } from './components/auth/protected-route';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/admission" element={<AdmissionPage />} />
                <Route path="/rules" element={<RulesPage />} />
                
                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/bus-route" element={<BusRoutePage />} />
                  <Route path="/attendance" element={<AttendancePage />} />
                  <Route path="/complaint" element={<ComplaintPage />} />
                </Route>
              </Routes>
            </main>
          </div>
          <Toaster position="top-right" />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;