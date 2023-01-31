import React from "react";
import { BiArch } from "react-icons/bi";
import { Link } from "react-router-dom";

function SideMenu() {
  const openMenu = (e) => {
    let parentLi = e.target.parentNode;

    // Remove open class form all other open menus
    let allMenuItemLi = document.querySelectorAll("menu-item");
    allMenuItemLi.forEach((li) => {
      li.classList.remove("open");
    });

    // Open or close the menu based on, If the menu is open or close
    if (parentLi.classList.contains("open")) {
      parentLi.classList.remove("open");
    } else {
      parentLi.classList.add("open");
    }
  };

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
      data-bg-class="bg-menu-theme"
    >
      <div className="app-brand demo ">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo">
            <BiArch />
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            Sneat
          </span>
        </a>

        <a
          href="#"
          className="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1 ps ps--active-y">
        <li className="menu-item active">
          <Link to="/admin/dashboard" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </Link>
        </li>

        <li className="menu-item">
          <a
            href="#"
            className="menu-link menu-toggle"
            onClick={(e) => openMenu(e)}
          >
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Categories">Categories</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link to="/admin/main-categories" className="menu-link">
                <div data-i18n="Main Categories">Main Categories</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/sub-categories" className="menu-link">
                <div data-i18n="Sub Categories">Sub Categories</div>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link to="/admin-login" className="menu-link">
            <i className="menu-icon tf-icons bx bx-power-off"></i>
            <div data-i18n="Analytics">Logout</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default SideMenu;
