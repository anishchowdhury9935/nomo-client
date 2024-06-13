import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
function App() {
  return (
    <div className='main_site'>
      <title>NOMO | Not Missing Out</title>
      <Router>
        <Modal />
        <div className='main_site_nav'>
          <Navbar />
        </div>
        <div className='main_site_content'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
