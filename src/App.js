import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path= '/'element={<Home/>}/>
      <Route path= '/contact'element={<Contact/>}/>
      <Route path= '/header'element={<Header/>}/>
      <Route path= '/skills'element={<Skills/>}/>
      <Route path= '/projects'element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
