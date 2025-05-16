import {useState} from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "../assets/KDYS-LOGO.png"; // Logo image
import "../XD-Design/DashboardPage.css";
import {
  FaBell,
  FaGift,
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
  FaChartLine,
} from "react-icons/fa"; // Import icons from React Icons
import Layer from "../assets/kdys-layer.png"; // Background layer image
import LessThan from '../assets/lessthann.png'
import GreaterThan from '../assets/greaterthan.png'
import { useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";


const DashboardPage = () => {

   const [activeLink, setActiveLink] = useState("dashboard");

     const links = [
    { id: "dashboard", label: "Dashboard", icon: <FaUserCircle />, href: "/" },
    { id: "profile", label: "My Profile", icon: <FaUser />, href: "/profile" },
    { id: "leave", label: "Leave", icon: <FaRegCalendarAlt />, href: "/leave" },
    { id: "attendance", label: "Attendance", icon: <FaClock />, href: "/attendance" },
    { id: "request", label: "Request", icon: <FaClipboard />, href: "/request" },
    { id: "performance", label: "Performance", icon: <FaTachometerAlt />, href: "/performance" },
    { id: "policies", label: "Policies", icon: <FaFileInvoice />, href: "/policies" },
    { id: "payslip", label: "Payslip", icon: <FaFileAlt />, href: "/payslip" },
    { id: "allocations", label: "Allocations", icon: <FaTasks />, href: "/allocations" }
  ];

    const handleLinkClick = (key) => {
    setActiveLink(key);
    // You can also navigate manually here using window.location or useNavigate
  };
  return (
    // <div className="app-container">
    //   {/* Sidebar */}
    //   <div className="sidebar">
    //     <div className="logo-section">
    //       <img className="logo" src={MainLogo} alt="Logo" />
    //     </div>

    //     <nav className="sidebar-links">
    //       <img className="sidebar-layer" src={Layer} alt="Layer Background" />

    //       <a href="/"><FaUser /> My Profile</a>
    //       <a href="/profile"><FaRegCalendarAlt /> Leave</a>
    //       <a href="/attendance"><FaClock /> Attendance</a>
    //       <a href="/request"><FaClipboard /> Request</a>
    //       <a href="/performance"><FaTachometerAlt /> Performance</a>
    //       <a href="/policies"><FaFileInvoice /> Policies</a>
    //       <a href="/payslip"><FaFileAlt /> Payslip</a>
    //       <a href="/allocations"><FaTasks /> Allocations</a>
    //     </nav>

    //     <div className="logout">
    //       <FaSignOutAlt /> Logout
    //     </div>
    //   </div>

    //   {/* Main Section */}
    //   <div className="main-section">
    //     <div className="navbar">
    //       <input type="text" placeholder="Search..." className="search-input" />
    //       <div className="navbar-icons">
    //         <span>🎁</span>
    //         <span>🔔</span>
    //         <span>👤</span>
    //       </div>
    //     </div>

    //     <div className="content">
    //       <div className="header">Welcome to the Dashboard</div>
    //       <div className="main-content">
    //         <p>Your content goes here!</p>
    //         <p>Additional content...</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="page-container">
    //   {/* Sidebar Section */}
    //   <div className="sidebar">
    //     {/* Logo Section */}
    //     <div className="logo-section">
    //       <img className="logo" src={MainLogo} alt="Logo" />
    //     </div>

    //     {/* Navigation Section */}
    //     <nav className="sidebar-links">
    //       <img className="sidebar-layer" src={Layer} alt="Background" />
    //        <a href="/">
    //     <FaUser style={{ marginRight: '10px' }} /> My Profile
    //   </a>
    //   <a href="/profile">
    //     <FaRegCalendarAlt style={{ marginRight: '10px' }} /> Leave
    //   </a>
    //   <a href="/settings">
    //     <FaClock style={{ marginRight: '10px' }} /> Attendance
    //   </a>
    //   <a href="/settings">
    //     <FaClipboard style={{ marginRight: '10px' }} /> Request
    //   </a>
    //   <a href="/settings">
    //     <FaTachometerAlt style={{ marginRight: '10px' }} /> Performance
    //   </a>
    //   <a href="/settings">
    //     <FaFileInvoice style={{ marginRight: '10px' }} /> Policies
    //   </a>
    //   <a href="/settings">
    //     <FaFileAlt style={{ marginRight: '10px' }} /> Payslip
    //   </a>
    //   <a href="/settings">
    //     <FaClock style={{ marginRight: '10px' }} /> Attendance
    //   </a>
    //   <a href="/settings">
    //     <FaTasks style={{ marginRight: '10px' }} /> Allocations
    //   </a>
    //     </nav>
    //     <div className='logout'>
    //        <FaSignOutAlt style={{ marginRight: '10px' }} /> Logout
    //     </div>
    //   </div>

    //   {/* Content Section */}
    //   <div className="content">
    //     <div className="header">Welcome to the Dashboard</div>
    //     <div className="main-content">
    //       <p>Your content goes here!</p>
    //       <p>Additional content...</p>
    //     </div>
    //   </div>
    // </div>

    <div className="admin-dashboard">
   <Sidebar/>

      {/* Main content area */}
      <div className="main-page">
        <header className="top-bar">
          {/* Left: Search */}
          <div className="topbar-left">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          {/* Right: Icons */}
          <div className="topbar-right">
            <FaBell className="topbar-icon" />
            <FaGift className="topbar-icon" />
            <FaUserCircle className="topbar-icon" />
          </div>
        </header>

        <div className="admin-content">
          <div className="row-1">
            <div className="banner">
              <div className="banner-leftside">
                <div className="banner-heading">
                  <h1>
                    <span className="normal-text poppins-regular">Welcome to</span> <br />
                    <span className="bold-text  poppins-bold">KDYS LAB</span>{" "}
                    <span className="light-text  poppins-light">PVT LTD</span>
                  </h1>
                </div>
                <div className="banner-left-bottom">
                  <h2 className="poppins-regular">Employee Dashboard</h2>
                  <p>
                    Welcome to your centralized hub for efficiency and teamwork!
                  </p>
                </div>
              </div>

              <div className="banner-rightside">
                <div className="banner-logo">
                  <img src={MainLogo} alt="Logo" />
                </div>
                <div className="banner-right-bottom">
                  12:35 PM, Monday, 29 January 2024
                </div>
              </div>
            </div>

            <div className="circle-wrapper">
              <div className="circle">
                <h1>0.00 HRS</h1>
              </div>
              <button className="punch-btn">Punch In</button>
            </div>
          </div>

          <div className="row-2">
            <div className="box-1">
              <h1>Leaves</h1>
              <div className="box-1-sub-boxes">
                <div className="subbox-1">
                  <h1>0</h1>
                  <p>Leave Taken</p>

                </div>
                <div className="subbox-2">
                   <h1>24</h1>
                  <p>Remaining</p>

                </div>

              </div>
              <button>Apply</button>

            </div>

            <div className="box-2">
              <h1>Requests</h1>
              <div className="box-2-sub-boxes">
                <div className="subbox2-1">
                  <h1>0</h1>
                  <p>Pending</p>

                </div>
                <div className="subbox2-2">
                   <h1>4</h1>
                  <p>Approved</p>

                </div>

                  <div className="subbox2-3">
                   <h1>1</h1>
                  <p>Declined</p>

                </div>

              </div>

                <button>Apply</button>

            </div>
           
            <div className="box-3">
              <h1>Performance</h1>
              <div className="box-3-sub-boxes">
                <div className="subbox3-1">
                  <h1>0</h1>
                  <p>Pending tasks</p>

                </div>
                <div className="subbox3-2">
                   <h1>4</h1>
                  <p>In Progress</p>

                </div>

                  <div className="subbox3-3">
                   <h1>10</h1>
                  <p>Completed</p>

                </div>

              </div>

                <button>view</button>

            </div>
          </div>

          <div className="row-3">
            <div className="timesheet">
              <h1>Timesheet</h1>
              

            </div>

            <div className="notice-board">
              <div className="notice-board-text">
                <h1>Notice Board</h1>
                </div>

                <div className="less-greater-icon">
                  <img src={LessThan}/>
                  <img src={GreaterThan}/>
                  </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
