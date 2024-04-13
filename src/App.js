import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Pages from './Pages/Pages';
import Journal from './Pages/Journal';
import Portfolio from './Pages/Portfolio';
// Component
import Sidebar from './Compontas/Sidebar/Sidebar';
import ToggleButton from './Compontas/Header/Header';
import Newsletter from './Compontas/Newsletter-form/Newsletter';
import BlogPost from "./Compontas/Journal_Com/Blog";
import BlogList from './Compontas/Journal_Com/Blog_list';
function App() {

  return (
    <div className="App">
      <div className='default-layout'>
        <Router>

          <ToggleButton />

          <div className='sidebar-with-page'>
            <div className='dekstop-sidbar'><Sidebar /></div>
            <div className='pages-content'>
              <Routes>


                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Portfolio' element={<Portfolio />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Pages' element={<Pages />} />
                <Route path='/Journal' element={<Journal />} />

        
              <Route path="/Blog/:id" element={<BlogPost />} />
              <Route path="/Blog/:id" element={<BlogList />} />
              </Routes>

              <div className='main-footer'> <Newsletter /></div>
            </div>

          </div>
        </Router>

      </div>
    </div>
  );

}

export default App;

