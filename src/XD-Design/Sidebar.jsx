import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import MainLogo from "../assets/KDYS-LOGO.png";
import Layer from "../assets/kdys-layer.png";
import {
  FaUserCircle,
  FaUser,
  FaSignOutAlt,
  FaRegCalendarAlt,
  FaClock,
  FaClipboard,
  FaTachometerAlt,
  FaFileInvoice,
  FaFileAlt,
  FaTasks,
} from "react-icons/fa";
import '../XD-Design/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { id: "dashboard", label: "Dashboard", icon: <FaUserCircle />, href: "/dashboard" },
    { id: "profile", label: "My Profile", icon: <FaUser />, href: "/profile" },
    { id: "leave", label: "Leave", icon: <FaRegCalendarAlt />, href: "/leave" },
    { id: "attendance", label: "Attendance", icon: <FaClock />, href: "/attendance" },
    { id: "request", label: "Request", icon: <FaClipboard />, href: "/request" },
    { id: "performance", label: "Performance", icon: <FaTachometerAlt />, href: "/performance" },
    { id: "policies", label: "Policies", icon: <FaFileInvoice />, href: "/policies" },
    { id: "payslip", label: "Payslip", icon: <FaFileAlt />, href: "/payslip" },
    { id: "allocations", label: "Allocations", icon: <FaTasks />, href: "/allocations" }
  ];

  return (
    <div className="sidebar ">
      <div className="sidebar-mainlogo">
        <img src={MainLogo} alt="Main Logo" />
      </div>

      <img className="sidebar-layer" src={Layer} alt="Layer Design" />

      <div className="sidebar-links ">
        <nav className="poppins-medium text-[17px]">
          {links.map(link => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.id}
                to={link.href}
                className={`link-item ${isActive ? 'active-link' : ''}`}
              >
                {link.icon} {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="logout">
          <FaSignOutAlt style={{ marginRight: "10px" }} /> Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
