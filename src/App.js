import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import PropertyList from './components/pages/PropertyList';
// import Properties from './pages/Properties';
// import Search from './pages/Search'; 
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
// import Blog from './pages/Blog';
// import FAQs from './pages/FAQs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />  
        <Route path="/properties/:type" element={<PropertyList/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/properties" component={Properties} />
          <Route path="/search" component={Search} />
         
         
          <Route path="/blog" component={Blog} />
          <Route path="/faqs" component={FAQs} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
