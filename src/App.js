import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import PropertyList from './components/pages/PropertyList';
// import Properties from './pages/Properties';
// import Search from './pages/Search'; 
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import BlogPosts from './components/pages/BlogPosts';
import FaqPage from './components/pages/FaqPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />  
        <Route path="/properties/:type" element={<PropertyList/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<BlogPosts/>} />
        <Route path="/faqs" element={<FaqPage/>} /> 
          {/* <Route path="/properties" component={Properties} />
          <Route path="/search" component={Search} />*/}
         
         
  
         
      </Routes>
    </BrowserRouter>
  );
};

export default App;
