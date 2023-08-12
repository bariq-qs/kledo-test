import PublicLayout from "layouts/public";
import Login from "views/login";
import Profile from "views/profile";
import Dashboard from "views/dashboard";
import AdminLayout from "layouts/admin";
import Shipping from "views/shipping";
import ShippingForm from "views/shipping/form";
import { store } from "redux/store";
import {
  RouterProvider,
  redirect,
  createBrowserRouter,
} from "react-router-dom";

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
  loader: () => {
    const isLogin = store.getState().user.isLogin;
    if (!isLogin) {
      return redirect("/");
    }
    return null;
  },
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
      path: "shipping/*",
      element: <Shipping />,
    },
    {
      path: "shipping/form/:id?",
      element: <ShippingForm />,
    },
  ],
};

const routes = () => {
  const router = createBrowserRouter([publicRoute, adminRoute]);
  return <RouterProvider router={router} />;
};

export default routes;
