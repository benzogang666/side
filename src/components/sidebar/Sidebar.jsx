import "./Sidebar.css";

import {
  IoBookOutline,
  IoPeopleOutline,
  IoMapOutline,
  IoCartOutline,
  IoChatbubbleEllipsesOutline,
  IoReaderOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";

import { NavLink } from "react-router";

const pages = [
  {
    label: "Меню",
    icon: <IoBookOutline className="sidebar-label-icon" />,
    path: "/menu",
  },
  {
    label: "Вакансии",
    icon: <IoPeopleOutline className="sidebar-label-icon" />,
    path: "/vacancies",
  },
  {
    label: "Контакты",
    icon: <IoMapOutline className="sidebar-label-icon" />,
    path: "/contacts",
  },
  {
    label: "Корзина",
    icon: <IoCartOutline className="sidebar-label-icon" />,
    path: "/cart",
  },
  {
    label: "Отзывы",
    icon: <IoChatbubbleEllipsesOutline className="sidebar-label-icon" />,
    path: "/reviews",
  },
  {
    label: "Бланк",
    icon: <IoReaderOutline className="sidebar-label-icon" />,
    path: "/receipt",
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-repository">
          {pages.map(({ label, icon, path }) => (
            <NavLink className="sidebar-label" to={path} key={path}>
              {icon} <div>{label}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;