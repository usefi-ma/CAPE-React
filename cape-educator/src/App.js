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
import Register from './user-pages/Register';
import AdminLayout from './layouts/admin-layout';
import Dashboard from './admin-pages/Dashboard';
import Banner from './admin-pages/Banner';
import ExecutiveDashboard from './admin-pages/Executive';
import ResearchDashboard from './admin-pages/Research';
import ConferenceDashboard from './admin-pages/Conference/Conference';
import SpeakersDashboard from './admin-pages/Conference/Speakers';
import SponsersDashboard from './admin-pages/Conference/Sponsers';
import ContactDashboard from './admin-pages/Conference/Contact';



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
                <Route path="speakers" element={<SpeakersDashboard />} />
                <Route path="sponsers" element={<SponsersDashboard />} />
                <Route path="contactdashboard" element={<ContactDashboard />} />
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
        <Route path="register" element={<Register />} />
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
