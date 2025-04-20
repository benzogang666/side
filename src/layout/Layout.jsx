import "./Layout.css";

import Sidebar from "../components/sidebar/Sidebar";

import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Stamp from "../components/stamp/Stamp";

const Layout = () => {
  return (
    <>
      <div className="need">
        <Sidebar />
        <div className="layout">
          <Header />
          <div className="main">
            <Outlet />
          </div>
          <Stamp />
        </div>
      </div>
    </>
  );
};

export default Layout;