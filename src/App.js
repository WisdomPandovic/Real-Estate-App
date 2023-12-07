import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
// import Properties from './pages/Properties';
// import Search from './pages/Search'; 
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import FAQs from './pages/FAQs';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home />} />  
          {/* <Route path="/properties" component={Properties} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/faqs" component={FAQs} /> */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;
