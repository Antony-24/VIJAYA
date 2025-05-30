import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import VirtualTour from '../pages/VirtualTour';
import Facilities from '../pages/Facilities';
import KPVGroup from '../pages/KPVGroup';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import ContactUs from '../pages/ContactUs';

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/kpv-group" element={<KPVGroup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
