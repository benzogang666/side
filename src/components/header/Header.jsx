import "./Header.css";

import { useNavigate } from "react-router";

import { master_sidebar } from "../../utils/master_sidebar";

import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <IoMenuOutline className="header-icon" onClick={master_sidebar} />
        <div className="header-named">727 specility</div>
        <IoSearchOutline
          className="header-icon"
          onClick={() => navigate("/search")}
        />
      </div>
    </>
  );
};

export default Header;