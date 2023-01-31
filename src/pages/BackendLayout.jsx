import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/backend/Footer";
import Navbar from "../components/backend/Navbar";
import SideMenu from "../components/backend/SideMenu";
import "./BackendLayout.css";

function BackendLayout() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <SideMenu />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackendLayout;
