import React,{useState} from 'react'
import MainLogo from "../assets/KDYS-LOGO.png"; // Logo image
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
import { useNavigate } from 'react-router-dom';
import '../XD-Design/Sidebar.css'
import Sidebar from './Sidebar';
import Anonymous from '../assets/anonymous.png'
import '../XD-Design/AttendancePage.css'

const AttendancePage = () => {
  return (
  <div className="attendance-page">
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
      </div>
      </div>
       
  )
}

export default AttendancePage 