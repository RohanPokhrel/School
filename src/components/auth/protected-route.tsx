import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/auth-store';

export function ProtectedRoute() {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}