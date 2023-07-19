import { Navigate, createBrowserRouter } from "react-router-dom";
import appRoutes from "./AppRoutes";
import PublicLayout from "../pages/layouts/PublicLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Protected/profile/Profile";
import ProtectedLayout from "../pages/layouts/ProtectedLayout";
import Dashboard from "../pages/Protected/dashboardLanding/Dashboard";
import UserGroup from "../pages/usergroups/UserGroup";

const AppRouter = createBrowserRouter([
  {
    path: appRoutes().home.home,
    element: <PublicLayout />,
    children: [
      {
        path: appRoutes().home.home,
        element: <Home />,
      },
      {
        path: appRoutes().home.login,
        element: <Login />,
      },
      {
        path: appRoutes().home.register,
        element: <Register />,
      },
      { path: appRoutes().home.notFound, element: <NotFound /> },
    ],
  },
  {
    path: appRoutes().dashboard.dashboard,
    element: <ProtectedLayout />,
    children: [
      {
        path: appRoutes().dashboard.dashboard,
        element: <Dashboard />,
      },
      {
        path: appRoutes().dashboard.profile,
        element: <Profile />,
      },
      {
        path: appRoutes().dashboard.usergroup.usergroups,
        element: <UserGroup />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate replace to={appRoutes().home.notFound} />,
  },
]);

export default AppRouter;
