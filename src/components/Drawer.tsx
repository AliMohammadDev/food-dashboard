import { useState, type ReactNode } from "react";
import LogoutIcon from "../assets/icons/LogoutIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import clsx from "clsx";
import CloseIcon from "../assets/icons/CloseIcon";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";
import logo from "../assets/images/logo.png";
import MenuIcon from "./MenuIcon.tsx";
import OrderIcon from "../assets/icons/OrderIcon.tsx";
import CategoriesIcon from "../assets/icons/CategoryIcon.tsx";

type DrawerItem = {
  name: string;
  url: string;
  icon: ReactNode;
};
const items: DrawerItem[] = [
  { name: "Home", url: "/", icon: <HomeIcon /> },
  { name: "Categories", url: "/categories", icon: <CategoriesIcon /> },
  { name: "Items", url: "/items", icon: <MenuIcon /> },
  { name: "Orders", url: "/orders", icon: <OrderIcon /> },
  { name: "Logout", url: "/logout", icon: <LogoutIcon /> },
];
const Drawer = ({ children }: { children: ReactNode }) => {

  const [drawerExpanded, setDrawerExpanded] = useState(false);
  return (
    <div className="flex min-h-svh w-svw bg-gray-50">
      <div
        className={clsx(
          "fixed left-0 top-0 z-50 w-full overflow-hidden bg-white shadow transition-all duration-500 sm:static sm:w-72 sm:min-w-72",
          drawerExpanded ? "max-w-full" : "max-w-0",
        )}
      >
        <button
          onClick={() => {
            setDrawerExpanded(false);
          }}
          className="btn-ghost absolute right-4 top-4 flex items-center justify-center rounded-full p-1 sm:hidden"
        >
          <CloseIcon />
        </button>
        <div className="flex h-svh flex-col overflow-y-auto p-4">
          <Link to="/" className="mb-4 flex h-12 items-center">
            <img src={logo} alt="logo" className="" />
          </Link>
          {items.map((item) => (
            <NavLink
              key={item.name}
              to={item.url}
              onClick={() => {
                if (drawerExpanded) setDrawerExpanded(false);
              }}
              className={({ isActive }) =>
                clsx(
                  "flex w-full items-center  gap-2 rounded p-2 hover:bg-gray-100",
                  isActive ? "bg-gray-100" : "",
                )
              }
            >
              {item.icon} <span className="block">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex max-h-svh flex-1 flex-col gap-4 overflow-y-auto p-4">
        <Header setDrawerExpanded={setDrawerExpanded} />
        {children}
      </div>
    </div>
  );
};

export default Drawer;
