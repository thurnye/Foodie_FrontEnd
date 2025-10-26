// routes/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/app.hooks";

interface Props {
  children: React.ReactNode;
}

export default function PublicRoute({ children }: Props) {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  // Show loading state while auth is initializing
  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <div className='text-xl font-semibold'>Loading...</div>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}