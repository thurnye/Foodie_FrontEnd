import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const LoginScreen = lazy(() => import("../pages/LoginScreen").then(m => ({ default: m.default })));
const RegisterScreen = lazy(() => import("../pages/RegisterScreen").then(m => ({ default: m.RegisterScreen })));
const ForgotPassword = lazy(() => import("../pages/ForgottenPassword").then(m => ({ default: m.default })));

export const authRoutes: RouteObject[] = [
  { path: "/login", element: <LoginScreen /> },
  { path: "/register", element: <RegisterScreen /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
];
