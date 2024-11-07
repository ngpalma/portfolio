import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import {
  navLinksArray,
  servicesArray,
  projectsArray,
  socialMedia,
  contactArray
} from "./utils/data";

function App() {
  return (
    <div>
      <NavBar navLinksArray={navLinksArray} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/services"
          element={<Services servicesArray={servicesArray} />}
        />
        <Route
          path="/projects"
          element={<Projects projectsArray={projectsArray} />}
        />
        <Route path="/contact" element={<Contact contactArray={contactArray}/>} />
      </Routes>
      <Footer navLinksArray={navLinksArray} socialMedia={socialMedia} />
    </div>
  );
}

export default App;
