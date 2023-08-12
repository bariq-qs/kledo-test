import PublicLayout from "layouts/public";
import Login from "views/login";
import Profile from "views/profile";
import Dashboard from "views/dashboard";
import AdminLayout from "layouts/admin";
import Shipping from "views/shipping";

const publicRoute = {
  path: "*",
  element: <PublicLayout />,
  children: [
    {
      path: "profile",
      element: <Profile />,
    },
    {
      index: true,
      element: <Login />,
    },
  ],
};

const adminRoute = {
  path: "/admin/",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
      path: "shipping",
      element: <Shipping />,
    },
  ],
};

const routes = [publicRoute, adminRoute];

export default routes;
