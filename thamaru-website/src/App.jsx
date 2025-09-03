import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

import BodyContent from './Components/BodyContent'
import NavigationBar from './Components/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


function App() {

  return (
    <Router>
        <NavigationBar/>
        <ScrollToTop/>
      <Routes>
        <Route path='/' element={<BodyContent />} />
      </Routes>

    </Router>
  )
}

export default App
