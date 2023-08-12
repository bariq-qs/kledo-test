import { useLocation, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { ReactSVG } from "react-svg";

const AdminLayout = () => {
  const location = useLocation()
  const menus = [
    {
      path: "/admin",
      label: "Dashboard",
      icon: "/assets/icons/dashboard.svg",
    },
    {
      path: "/admin/shipping",
      label: "Shipping Comps",
      icon: "/assets/icons/truck.svg",
    },
  ];
  return (
    <div className='container-admin'>
      <div className='navbar'>
        <p className='title'>KLEDO TEST ADMIN</p>
        <div className='menu gap-2 items-center '>
          <img
            src='https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/04/06/Tony-Stark-atau-Iron-Man-364921409.jpg'
            className='h-8 w-8 rounded-full'
          />
          <p className=' text-lg text-white'>Tony Stark</p>
        </div>
      </div>
      <div className='sidebar'>
        {menus.map((menu, key) => (
          <Link to={menu.path} className={`menu ${location.pathname === menu.path && 'active'}`} key={key}>
            <ReactSVG src={menu.icon} />
            <p>{menu.label}</p>
          </Link>
        ))}
      </div>
      <div className='wrap-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
