import { useLocation, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

const PublicLayout = () => {
  const location = useLocation();
  const menus = [
    {
      label: "Profile",
      path: "/profile",
    },
    {
      label: "Login",
      path: "/",
    },
  ];

  return (
    <div className='container-public'>
      <div className='navbar'>
        <p className='title'>KLEDO TEST</p>
        <div className='menu'>
          {menus.map((menu, key) => (
            <Link
              to={menu.path}
              className={`menu-item ${
                location.pathname === menu.path && "active"
              }`}
              key={key}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>
      <div className='wrap-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
