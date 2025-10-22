// routes/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/app.hooks";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Box component="main" sx={{ p: 3 }}>{children}</Box>;
}