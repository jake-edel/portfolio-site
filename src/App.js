import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <main>
      <div className='sidebar'>
        {/* <img src={headshot} className='headshot' alt='Jakob Edelstein Headshot'></img> */}
        <div className='mobile-spacer'>
          <div className='profile-image-container'></div>
        </div>
      </div>

        
      <div className='content'>
          <h1 className='name'>Jakob Edelstein</h1>
        <div className='page-content'>
          <Router>
              <Navbar/>
            <Routes>
              <Route path='/' exact element={<About/>}> </Route>
              <Route path='/projects' exact element={<Projects/>}></Route>
              <Route path='/contact' exact element={<Contact/>}></Route>
              <Route path='/resume' exact element={<Resume/>}></Route>
            </Routes>
        </Router>
      </div>
    </div>
  </main>
  );
}

export default App;
