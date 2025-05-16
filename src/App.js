
import './App.css';
import LoginPage from './XD-Design/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './XD-Design/DashboardPage';
import ProfilePage from './XD-Design/ProfilePage';
import LeavePage from './XD-Design/LeavePage';
import AttendancePage from './XD-Design/AttendancePage';
import PaySlipPage from './XD-Design/PaySlip';
import Allocation from './XD-Design/Allocation';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/leave" element={<LeavePage />} />
          <Route path="/attendance" element={<AttendancePage />} />
           <Route path="/payslip" element={<PaySlipPage />} />
            <Route path="/allocations" element={<Allocation />} />
      </Routes>
    </Router>
  );
}

export default App;
