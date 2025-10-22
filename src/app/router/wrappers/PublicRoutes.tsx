// routes/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/app.hooks";

interface Props {
  children: React.ReactNode;
}

export default function PublicRoute({ children }: Props) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  console.log("PublicRoute - isAuthenticated:", isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}