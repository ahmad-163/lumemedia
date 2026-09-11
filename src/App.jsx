import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import WorkIndex from './pages/WorkIndex';
import WorkDetail from './pages/WorkDetail';
import Story from './pages/Story';
import Founders from './pages/Founders';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-cream-50 font-sans flex flex-col justify-between selection:bg-amber selection:text-navy-950">
      {/* Custom Desktop Cursor */}
      <Cursor />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Content with Transition */}
      <div className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkIndex />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/about/story" element={<Story />} />
            <Route path="/about/founders" element={<Founders />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
