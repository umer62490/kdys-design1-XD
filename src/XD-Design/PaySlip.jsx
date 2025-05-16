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
import '../XD-Design/PaySlipPage.css'

const PaySlipPage = () => {
  return (
  <div className="payslip-page">
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

      <div className='upper-slip-content flex justify-between items-center mb-6 mt-2 p-4'>
  {/* Left Heading */}
  <div className="text-left">
    <h1 className="text-2xl font-bold text-[#0D557E] mb-2">Payslip</h1>
    <h2 className="text-sm text-gray-500">Dashboard / Payslip</h2>
  </div>

  {/* Right Download Button */}
  <div className='download-slip'>
    <button className="bg-[#0D557E] text-white px-4 py-2 rounded-md hover:bg-[#0b4564] transition">
      Download
    </button>
  </div>
</div>

<div className='payslip-container'>
   <div className='top-content flex items-center justify-between p-4'>
  
  <div className="flex-shrink-0">
    <img src={MainLogo} alt="Logo" className="h-16 w-auto"  />
    <h3 className='text-[#0D557E] text-sm'>kdys lab pvt ltd</h3>
    <p className='text-[#0D557E] text-sm'>Near Fortune Center</p>
  </div>

 
  <div className="text-center flex-1">
    <h1 className="text-3xl font-semibold text-[#0D557E]">January 2024</h1>
  </div>

  
  <div className="flex-shrink-0">
    <button className="bg-[#0D557E] text-white px-4 py-2 rounded-md hover:bg-[#0b4564] transition">
      This Month
    </button>
  </div>
</div>
<div className="space-y-2 pl-3 pr-3">
 
  <div className="flex bg-[#0D557E] gap-6 text-white p-4  rounded-t-lg gap-6 text-sm mb-5 font-semibold w-full px-6">
    <div className="flex-1">Employee ID</div>
    <div className="flex-1">Employee Name</div>
    <div className="flex-1">Designation</div>
    <div className="flex-1">Department</div>
    <div className="flex-1">Payment Mode</div>
    <div className="flex-1">Payment Date</div>
  </div>

 
  <div className="flex bg-white gap-6 shadow-lg border border-gray-300 rounded-lg text-gray-700 p-4 w-full px-6">
    <div className="flex-1">88</div>
    <div className="flex-1">Muhammad Umar</div>
    <div className="flex-1">Front-End Intern</div>
    <div className="flex-1">Design</div>
    <div className="flex-1">Bank Transfer</div>
    <div className="flex-1">13th May, 2025</div>
  </div>
</div>

<div className="details flex gap-6 w-full">

  <div className="sal-allowance-details flex-1">
    <h1 className="text-xl font-semibold text-[#0D557E] mb-4 mt-4 pl-3">Salary and Allowance</h1>

  
    <div className="flex bg-white p-4 rounded-lg w-full mb-4">
      <div className="bg-[#0D557E] text-white text-center px-4 py-2 rounded-l-md w-2/3">
        <h2 className="text-sm font-semibold">Basic Salary</h2>
      </div>
      <button className="bg-white text-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-1/4">
        20,000 PKR
      </button>
    </div>

    
    <div className="flex bg-white p-4 rounded-lg w-full mb-4">
      <div className="bg-[#0D557E] text-white text-center px-4 py-2 rounded-l-md w-2/3">
        <h2 className="text-sm font-semibold">House Rent</h2>
      </div>
      <button className="bg-white text-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-1/4">
        5,000 PKR
      </button>
    </div>

   
    <div className="flex bg-white p-4 rounded-lg w-full mb-4">
      <div className="bg-[#0D557E] text-white text-center px-4 py-2 rounded-l-md w-2/3">
        <h2 className="text-sm font-semibold">Medical Allowance</h2>
      </div>
      <button className="bg-white text-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-1/4">
        2,000 PKR
      </button>
    </div>

    
    <div className="flex bg-white p-4 rounded-lg w-full mb-4">
      <div className="bg-[#0D557E] text-white text-center px-4 py-2 rounded-l-md w-2/3">
        <h2 className="text-sm font-semibold">Bonus</h2>
      </div>
      <button className="bg-white text-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-1/4">
        3,000 PKR
      </button>
    </div>

    <div className="flex bg-white p-4 rounded-lg w-full ">
      <div className="bg-[#0D557E] text-white text-center px-4 py-2 rounded-l-md w-1/4">
        <h2 className="text-sm font-semibold">Amount in words</h2>
      </div>
      <button className="bg-white text-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-2/3">
      One lac twenty three thousand only
      </button>
    </div>
  </div>

  
  <div className="deduction-details flex-1">
    <h1 className="text-xl font-semibold text-[#0D557E] mb-4 mt-4 pl-3">Deductions</h1>

   
    <div className="flex bg-white p-4 rounded-lg w-full mb-4">
      <div className="bg-[#0D557E] text-white text-center px-4 py-2 rounded-l-md w-2/3">
        <h2 className="text-sm font-semibold">Tax</h2>
      </div>
      <button className="bg-white text-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-1/4">
        1,500 PKR
      </button>
    </div>

   
    <div className="flex bg-white p-4 rounded-lg w-full mb-4">
      <div className="bg-[#0D557E] text-white text-center px-4 py-2 rounded-l-md w-2/3">
        <h2 className="text-sm font-semibold">EOBI</h2>
      </div>
      <button className="bg-white text-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-1/4">
        500 PKR
      </button>
    </div>

   
    <div className="flex bg-white p-4 rounded-lg w-full mb-4">
      <div className="bg-[#0D557E] text-white text-center px-4 py-2 rounded-l-md w-2/3">
        <h2 className="text-sm font-semibold">Late Deductions</h2>
      </div>
      <button className="bg-white text-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-1/4">
        1,000 PKR
      </button>
    </div>



 <div className="flex bg-white p-4 rounded-lg w-full ">
      <div className="bg-[#0D557E] text-white text-center px-4 py-2 rounded-l-md w-1/4">
        <h2 className="text-sm font-semibold">Net Amount Payable</h2>
      </div>
      <button className="bg-white text-[#0D557E] px-4 py-2 border border-[#0D557E] rounded-r-md text-sm font-medium w-2/3">
        1,023,00 PKR
      </button>
    </div>



  </div>
</div>



</div>
      </div>
      </div>
       
  )
}

export default PaySlipPage
