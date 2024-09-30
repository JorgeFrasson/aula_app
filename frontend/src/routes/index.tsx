import { Navigate, useRoutes } from "react-router-dom";
import { PATHS, ROOT_PATHS } from "./paths";
import LoginPage from "../sections/auth/login";
import RegisterPage from "../sections/auth/register/register";
import NotFoundPage from "../sections/miscelaneous/404";
import AuthLayout from "../sections/auth/auth-layout";
import DashboardLayout from "../sections/dashboard/dashboard-layout";
import SalesDashboardPage from "../sections/sales/sales";

export default function Router() {
  return useRoutes([
    {
      path: ROOT_PATHS.ROOT, // Caminho raiz "/"
      element: <Navigate to={PATHS.auth.root} replace />, // Redireciona para login
    },
    // Auth
    {
      path: PATHS.auth.root,
      element: (
        <AuthLayout />
      ),
      children: [
        {
          path: '', // "" vai tratar o path "/auth"
          element: <Navigate to={PATHS.auth.login} replace />, // Redireciona "/auth" para "/auth/login"
        },
        {
          path: PATHS.auth.login, // "/auth/register"
          element: <LoginPage />,
          
        },
        {
          path: PATHS.auth.register, // "/auth/register"
          element: <RegisterPage />,
        },
      ],
    },
    // Dashboard
    {
      path: ROOT_PATHS.DASHBOARD,
      element: (
        <DashboardLayout />
      ),
      children: [
        // Vendas
        {
          index: true,
          element: (
            <SalesDashboardPage />
          ),
        },
        // Usuários
        {
          path: PATHS.dashboard.users.root,
          element: (
            <>
            </>
          )
        }
      ]
    },
    // NotFound
    {
      path: "*", // Wildcard para qualquer rota que não seja definida
      element: <NotFoundPage/>, // Redireciona para login em caso de rota inválida
    },
  ]);
}
