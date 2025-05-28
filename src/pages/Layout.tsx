import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";

const Layout = () => {
  return (
    <Drawer>
      <Outlet />
    </Drawer>
  );
};

export default Layout;
