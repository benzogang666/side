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

import { open_sidebar } from "../../utils/open_sidebar";

const pages = [
  {
    element: "Меню",
    icon: <IoBookOutline className="sidebar-element-icon" />,
    path: "/menu",
  },
  {
    element: "Вакансии",
    icon: <IoPeopleOutline className="sidebar-element-icon" />,
    path: "/vacancies",
  },
  {
    element: "Контакты",
    icon: <IoMapOutline className="sidebar-element-icon" />,
    path: "/contacts",
  },
  {
    element: "Корзина",
    icon: <IoCartOutline className="sidebar-element-icon" />,
    path: "/cart",
  },
  {
    element: "Отзывы",
    icon: <IoChatbubbleEllipsesOutline className="sidebar-element-icon" />,
    path: "/reviews",
  },
  {
    element: "Бланк",
    icon: <IoReaderOutline className="sidebar-element-icon" />,
    path: "/receipt",
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">727 coffee</div>
        <div className="sidebar-repository">
          {pages.map(({ element, icon, path }) => (
            <div className="sidebar-element" to={path} key={path}>
              {icon} <div>{element}</div>
            </div>
          ))}
        </div>
        <div className="sidebar-element" onClick={open_sidebar}>
          <IoCloseCircleOutline className="sidebar-element-icon" />
          <div>Закрыть</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
