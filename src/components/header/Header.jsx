import "./Header.css";

import { useNavigate } from "react-router";

import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";

import { open_sidebar } from "../../utils/open_sidebar";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <IoMenuOutline className="header-icon" onClick={open_sidebar} />
        <div className="header-named">727</div>
        <IoSearchOutline
          className="header-icon"
          onClick={() => navigate("/search")}
        />
      </div>
    </>
  );
};

export default Header;
