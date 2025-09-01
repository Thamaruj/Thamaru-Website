import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BodyContent from './Components/BodyContent'
import NavigationBar from './Components/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
        <NavigationBar/>
      <Routes>
        <Route path='/' element={<BodyContent />} />
      </Routes>

    </Router>
  )
}

export default App
