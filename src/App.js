import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import AppWrapper from './components/AppWrapper';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Experience" element={<Experience />} />
        </Routes>
      </AppWrapper>
    <Footer />
    </>
  );
}

export default App;