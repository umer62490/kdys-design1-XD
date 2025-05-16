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
import '../XD-Design/ProfilePage.css'

const ProfilePage = () => {
  return (
    <div className='profile-page'>
      <Sidebar/>

       <div className="main-page">
        <header className="top-bar">
        
          <div className="topbar-left">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

        
          <div className="topbar-right">
            <FaBell className="topbar-icon" />
            <FaGift className="topbar-icon" />
            <FaUserCircle className="topbar-icon" />
          </div>
        </header>

       {/*<div className='profile-content'>
          <div className='main-heading'>
             <h1>Profile</h1>
          <h3>Dashboard / Profile</h3>
          </div>

          <div className='profile-page-first-row-box'>

            <div className='first-row-left-side-portion-employee'>
           <div className='profile-img'>
             <img src={Anonymous}/>
           </div>

           <div className='umar-position'>
            <div className='Intern-position'>
              <h1>Muhammad Umar</h1>
            <h2>Front-End Intern</h2>
              </div>

              <div className='employee-id'>
                <h1>Employee ID : 88</h1>
                <h2>Date of Join : 13th May 2025</h2>

              </div>

            

           </div>

          </div>

          <div className='first-row-right-side-portion-employee'>

              <div className='umar-extra-details'>
            <div className='phone'>
              <h1>Phone:</h1>
            <h2>+923322845831</h2>
              </div>

              <div className='email'>
                <h1>Email:</h1>
                <h2>umer62490@gmail.com</h2>

              </div>

                 <div className='gender'>
                <h1>Gender:</h1>
                <h2>Male</h2>

              </div>

                 <div className='address'>
                <h1>Address:</h1>
                <h2>Near Markaz-e-Sheereen Clifton</h2>

              </div>

                 <div className='Reporting'>
                <h1>Report to:</h1>
                <h2>Tauseef Khushdil</h2>

              </div>
                

            

           </div>

          </div>


          </div>
          

          <div className='profile-page-second-row-box'>

               <div className='first-row-left-side-portion-employee'>

              <div className='personal-details'>
            <div className='phone'>
              <h1>Phone:</h1>
            <h2>+923322845831</h2>
              </div>

              <div className='email'>
                <h1>Email:</h1>
                <h2>umer62490@gmail.com</h2>

              </div>

                 <div className='gender'>
                <h1>Gender:</h1>
                <h2>Male</h2>

              </div>

                 <div className='address'>
                <h1>Address:</h1>
                <h2>Near Markaz-e-Sheereen Clifton</h2>

              </div>

                 <div className='Reporting'>
                <h1>Report to:</h1>
                <h2>Tauseef Khushdil</h2>

              </div>
                

            

           </div>

          </div>

          </div>

          </div>*/}

    <div className="profile-page-content p-4">

     <div className="mb-6 mt-2 text-left">
    <h1 className="text-2xl font-bold text-[#0D557E] mb-1">Profile</h1>
    <h2 className="text-sm text-gray-500">Dashboard / Profile</h2>
  </div>
  {/* Horizontal Box */}
  <div className="flex bg-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-lg p-6 space-x-6">

 {/* Left Section (Profile Image + Text) */}
    <div className="flex-1 flex items-center space-x-4"> {/* Aligning image and text side-by-side */}
      <div className="profile-img">
        <img src={Anonymous} alt="Profile" className="w-24 h-24 rounded-full" />
      </div>

      <div className="umar-position space-y-6">
        <div className="Intern-position mb-2">
          <h1 className="text-xl font-semibold text-[#0D557E]">Muhammad Umar</h1>
          <h2 className="text-sm text-gray-600">Front-End Intern</h2>
        </div>

        <div className="employee-id">
          <h1 className="text-sm font-semibold text-[#0D557E]">Employee ID : 88</h1>
          <h2 className="text-sm text-gray-600">Date of Join : 13th May 2025</h2>
        </div>
      </div>
    </div>

    {/* Right Section */}
  <div className="flex-1">
  <div className="umar-extra-details space-y-4"> {/* Increased space-y for more space */}
    <div className="phone flex items-center gap-x-4">
      <h1 className="text-sm font-semibold text-[#0D557E] w-24">Phone:</h1>
      <h2 className="text-sm text-gray-600">+923322845831</h2>
    </div>

    <div className="email flex items-center gap-x-4">
      <h1 className="text-sm font-semibold text-[#0D557E] w-24">Email:</h1>
      <h2 className="text-sm text-gray-600">umer62490@gmail.com</h2>
    </div>

    <div className="gender flex items-center gap-x-4">
      <h1 className="text-sm font-semibold text-[#0D557E] w-24">Gender:</h1>
      <h2 className="text-sm text-gray-600">Male</h2>
    </div>

    <div className="address flex items-center gap-x-4">
      <h1 className="text-sm font-semibold text-[#0D557E] w-24">Address:</h1>
      <h2 className="text-sm text-gray-600">Near Markaz-e-Sheereen Clifton</h2>
    </div>

    <div className="Reporting flex items-center gap-x-4">
      <h1 className="text-sm font-semibold text-[#0D557E] w-24">Report to:</h1>
      <h2 className="text-sm text-gray-600">Tauseef Khushdil</h2>
    </div>
  </div>
</div>
  </div>
</div>

<div className="profile-page-content p-4 space-y-6">
  {/* Row 1: Single combined horizontal box (already implemented) */}
  {/* <div className="flex bg-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-lg p-6 space-x-6">
    
  </div> */}

  {/* Row 2: Two separate boxes side by side */}
  <div className="flex space-x-6">
    {/* Left Box */}
    <div className="flex-1 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-[#0D557E] mb-4">Personal Information</h1>
      <div className="umar-extra-details space-y-4">
        <div className="phone flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-28">CNIC:</h1>
          <h2 className="text-sm text-gray-600">42301-5006233-9</h2>
        </div>

        <div className="email flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-28">Personal Email:</h1>
          <h2 className="text-sm text-gray-600">umer62490@gmail.com</h2>
        </div>

        <div className="gender flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-28">Date of joining:</h1>
          <h2 className="text-sm text-gray-600">13th may'25</h2>
        </div>

        <div className="address flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-28">Father Name:</h1>
          <h2 className="text-sm text-gray-600">Muhammad Salman Khan</h2>
        </div>

        <div className="Reporting flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-28">Date of birth:</h1>
          <h2 className="text-sm text-gray-600">10th oct'2000</h2>
        </div>
      </div>
    </div>

    {/* Right Box */}
    <div className="flex-1 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-[#0D557E] mb-4">Official Information</h1>
      <div className="umar-extra-details space-y-4">
        <div className="phone flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Employee:</h1>
          <h2 className="text-sm text-gray-600">+923322845831</h2>
        </div>

        <div className="email flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Employment# Type:</h1>
          <h2 className="text-sm text-gray-600">131</h2>
        </div>

        <div className="gender flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Department:</h1>
          <h2 className="text-sm text-gray-600">Design</h2>
        </div>

        <div className="address flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Work Timings:</h1>
          <h2 className="text-sm text-gray-600">09:00 AM - 06:00 PM</h2>
        </div>

        <div className="Reporting flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Report to:</h1>
          <h2 className="text-sm text-gray-600">Lead</h2>
        </div>

         <div className="Reporting flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Salary:</h1>
          <h2 className="text-sm text-gray-600">20,000 PKR</h2>
        </div>
      </div>
    </div>
  </div>

   {/* Row 3: Same as Row 2 (New One) */}
  <div className="flex space-x-6">
    {/* Left Box */}
    <div className="flex-1 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-[#0D557E] mb-4">Bank Details</h1>
        <div className="space-y-4">
        <div className="flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Bank Name:</h1>
          <h2 className="text-sm text-gray-600">Meezan</h2>
        </div>
        <div className="flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Branch:</h1>
          <h2 className="text-sm text-gray-600">Clifton</h2>
        </div>
        <div className="flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Account#:</h1>
          <h2 className="text-sm text-gray-600">123124125</h2>
        </div>
        <div className="flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">IBAN#:</h1>
          <h2 className="text-sm text-gray-600">PK1326FL7822</h2>
        </div>
       
      </div>
    </div>

    {/* Right Box */}
    <div className="flex-1 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-[#0D557E] mb-4">Emergency Contact</h1>
      <div className="space-y-4">

        <div className="flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Name:</h1>
          <h2 className="text-sm text-gray-600">Ansub Khan</h2>
        </div>
        <div className="flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Relationship:</h1>
          <h2 className="text-sm text-gray-600">Cousin</h2>
        </div>
        <div className="flex items-center gap-x-4">
          <h1 className="text-sm font-semibold text-[#0D557E]  w-24">Phone:</h1>
          <h2 className="text-sm text-gray-600">090078601</h2>
        </div>
        
      </div>
    </div>
  </div>
</div>

        </div> 
    </div>
  )
}

export default ProfilePage
