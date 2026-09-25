import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Timecode from './components/Timecode';
import RouteWipe from './components/RouteWipe';

import Home from './pages/Home';
import WorkIndex from './pages/WorkIndex';
import WorkDetail from './pages/WorkDetail';
import Services from './pages/Services';
import Story from './pages/Story';
import StartProject from './pages/StartProject';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F1F4F8] text-[#101828] font-sans flex flex-col justify-between selection:bg-[#191970] selection:text-white">
      {/* Custom Desktop Cursor (Disabled for default cursor) */}
      <Cursor />

      {/* Running Timecode Counter */}
      <Timecode />

      {/* Platinum / Midnight Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-1">
        <RouteWipe>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkIndex />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<Story />} />
            <Route path="/about/story" element={<Story />} />
            <Route path="/about/founder" element={<Story />} />
            <Route path="/about/founders" element={<Story />} />
            <Route path="/start" element={<StartProject />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteWipe>
      </div>

      {/* Modern Revamped Footer */}
      <Footer />
    </div>
  );
}

