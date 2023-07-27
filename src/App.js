import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Career from './routes/Career';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/career' element={<Career/>} />
      </Routes>
      {/* <Navbar></Navbar> */}
    </div>
  );
}

export default App;


// it will show thw history.ts:480 Uncaught Error: useRoutes() may be used only in the context of a <Router> component.
// for this change the strict mode into browserrouter in the index.js
