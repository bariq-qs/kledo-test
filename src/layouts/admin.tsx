import { useLocation, Link, Outlet, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { ReactSVG } from "react-svg";
import { logoutUserFn } from "api/authApi";
import { toast } from "react-toastify";

const AdminLayout = (props: any) => {
  const { user } = props;
  const navigate = useNavigate()
  const location = useLocation();
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
  const onLogout = async () => {
    try {
      const res = await logoutUserFn();
      if (res.success) {
        toast.success(res.data?.message);
        navigate('/')
      }
    } catch (error) {}
  };
  return (
    <div className='container-admin'>
      <div className='navbar'>
        <p className='title'>KLEDO TEST ADMIN</p>
        <div className='menu gap-2 items-center '>
          <img
            src='https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/04/06/Tony-Stark-atau-Iron-Man-364921409.jpg'
            className='h-8 w-8 rounded-full'
          />
          <p className=' text-lg text-white'>{user?.name}</p>
        </div>
      </div>
      <div className='sidebar'>
        {menus.map((menu, key) => (
          <Link
            to={menu.path}
            className={`menu ${location.pathname === menu.path && "active"}`}
            key={key}
          >
            <ReactSVG src={menu.icon} />
            <p>{menu.label}</p>
          </Link>
        ))}
        <div
          className='mt-auto logout-section cursor-pointer'
          onClick={() => onLogout()}
        >
          <ReactSVG src='/assets/icons/logout.svg' />
          Log Out
        </div>
      </div>
      <div className='wrap-content'>
        <Outlet />
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }: any) => {
  const { data } = user;
  return {
    user: data?.user,
  };
};

export default connect(mapStateToProps)(AdminLayout);
