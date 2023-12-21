import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './page/Home.jsx';
import NavBar from './page/NavBar.jsx';
import Welcome from './page/Welcome.jsx';

function App() {

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={< Welcome />} />
          <Route path='/question' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
