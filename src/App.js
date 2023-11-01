import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }/>
        {/* <Route path="/home" element={ <Home/> }/> */}
        <Route path="/about" element={ <About cssstyling={"unique"}/> }/>
        <Route path="/testimonial" element={ <Testimonial cssstyling={"testimonial"}/> }/>
        <Route path="/contact" element={ <Contact cssstyling={"contact"}/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;