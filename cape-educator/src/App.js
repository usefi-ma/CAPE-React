// import './App.css';
import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from './user-pages/Home';
import About from './user-pages/About';
import Research from './user-pages/Research';
import Executive from './user-pages/Executive';
import ExecutiveDetail from './user-pages/ExecutiveDetail';
import Conferences from './user-pages/Conferences';
import Contact from './user-pages/Contact';
import ConferenceDetail from './user-pages/ConferenceDetail';
import PageNotFound from './page-not-found';
import Signin from './user-pages/Signin';
import SignUp from './user-pages/Register'
import AdminLayout from './layouts/admin-layout';
import Dashboard from './admin-pages/Dashboard';
import Banner from './admin-pages/Banner';
import ExecutiveDashboard from './admin-pages/executive';
import ResearchDashboard from './admin-pages/research/Research';
import ConferenceDashboard from './admin-pages/Conference/Conference';
import SpeakersDashboard from './admin-pages/speaker/Speaker';
import SponsorDashboard from './admin-pages/sponsor/Sponsor';
import ContactDashboard from './admin-pages/Conference/Contact';
import Contactbook from './admin-pages/Contactbook';
import ConferenceDetailDashboard from './admin-pages/Conference/ConferenceDetail';

function App() {
  return (
    <>
   
     <Routes>
     
            <Route element={ <PrivateRoute><AdminLayout /></PrivateRoute>}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="banner" element={<Banner />} />
                <Route path="executivedashboard" element={<ExecutiveDashboard />} />
                <Route path="researchdashboard" element={<ResearchDashboard />} />
                <Route path="conferences" element={<ConferenceDashboard />} />
                <Route path="conferenceDetail" element={<ConferenceDetailDashboard />} />
                <Route path="speaker" element={<SpeakersDashboard />} />
                <Route path="sponsor" element={<SponsorDashboard />} />
                <Route path="contactdashboard" element={<ContactDashboard />} />
                <Route path="Contactbook" element={<Contactbook />} />
            </Route>
       
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="executive" element={<Executive />} />
        <Route path="executive/:id" element={<ExecutiveDetail />} />
        <Route path="conference" element={<Conferences />} />
        <Route path="conferenceDetail/:id" element={<ConferenceDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<Signin />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<PageNotFound />}/>
     </Routes>
    </>
  );
  }

export default App;

const PrivateRoute=({children})=>{
  if(false){//todo change it to false to see the adminLayout pages // eposede 6
    return <Navigate to="/signin" replace />
  }
  return children;
};
