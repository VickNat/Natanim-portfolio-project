import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import AppWrapper from './components/AppWrapper';

function App() {
  return (
    <>
    <Navbar />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </AppWrapper>
    </>
  );
}

export default App;