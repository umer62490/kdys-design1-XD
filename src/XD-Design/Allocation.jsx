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
   FaList
} from "react-icons/fa"; // Import icons from React Icons
import Layer from "../assets/kdys-layer.png"; // Background layer image
import { useNavigate } from 'react-router-dom';
import '../XD-Design/Sidebar.css'
import Sidebar from './Sidebar';
import Anonymous from '../assets/anonymous.png'
import '../XD-Design/Allocation.css'

const Allocation = () => {
  return (
    <div className="allocation-page">
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

        <div className='allocation-container'>

            <div className='main-text flex justify-between p-4 mt-2 '>
                <div className='alocc-text'>
                    <h1 className='text-3xl text-[#0D557E]'>Allocations</h1>
                    <p className='text-sm'><span className='font-bold'>Dashboard</span>/Allocation</p>

                </div>
                <div className='alooc-button'>
                    <button className='text-white bg-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-full'> + New Allocation Request</button>

                </div>

            </div>

            <div className='filter-dropdown-part justify-between flex p-4'>
                <div className="flex items-center space-x-2">
      <FaList className="text-gray-600" />
      <p>List</p>
    </div>
               <div>
                 <button className='text-white bg-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-full'>25</button>
               </div>
            </div>

            <div className='list-options space-y-2 pl-3 pr-3'>
                <div className='main-head-option poppins-regular text-[13px] flex bg-[#0D557E] gap-6 text-white p-4  rounded-t-lg gap-6 text-sm mb-5 font-semibold w-full px-6"'>
                
    <div className="flex-1">Employee ID</div>
    <div className="flex-1">Employee Name</div>
    <div className="flex-1">Designation</div>
    <div className="flex-1">Department</div>
    <div className="flex-1">Payment Mode</div>
    <div className="flex-1">Payment Date</div>
 

                </div>

                <div className='option-answers'>
                     <div className='main-head-option poppins-regular text-[13px] flex text-[#0D557E] shadow-lg border border-black bg-white p-4  rounded-t-lg gap-6 text-sm mb-5 font-semibold w-full px-6"'>
                
    <div className="flex-1">Employee ID</div>
    <div className="flex-1">Employee Name</div>
    <div className="flex-1">Designation</div>
    <div className="flex-1">Department</div>
    <div className="flex-1">Payment Mode</div>
    <div className="flex-1">Payment Date</div>
 

                </div>
                    <div className='main-head-option flex text-[13px] shadow-lg text-[#0D557E] border border-black bg-white p-4  rounded-t-lg gap-6 text-sm mb-5 font-semibold w-full px-6"'>
                
    <div className="flex-1">Employee ID</div>
    <div className="flex-1">Employee Name</div>
    <div className="flex-1">Designation</div>
    <div className="flex-1">Department</div>
    <div className="flex-1">Payment Mode</div>
    <div className="flex-1">Payment Date</div>
 

                </div>
                    <div className='main-head-option poppins-regular text-[13px] flex text-[#0D557E] shadow-lg bg-white p-4 border border-black rounded-t-lg gap-6 text-sm mb-5 font-semibold w-full px-6"'>
                
    <div className="flex-1">Employee ID</div>
    <div className="flex-1">Employee Name</div>
    <div className="flex-1">Designation</div>
    <div className="flex-1">Department</div>
    <div className="flex-1">Payment Mode</div>
    <div className="flex-1">Payment Date</div>
 

                </div>
                    <div className='main-head-option poppins-regular text-[13px] flex text-[#0D557E] shadow-lg bg-white p-4 border border-black rounded-t-lg gap-6 text-sm mb-5 font-semibold w-full px-6"'>
                
    <div className="flex-1">Employee ID</div>
    <div className="flex-1">Employee Name</div>
    <div className="flex-1">Designation</div>
    <div className="flex-1">Department</div>
    <div className="flex-1">Payment Mode</div>
    <div className="flex-1">Payment Date</div>
 

                </div>

                </div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Allocation
