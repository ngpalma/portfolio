import { Routes, Route } from "react-router-dom";
import { About, Contact, Home, Projects, Services } from "./pages/index";
import { Footer, NavBar } from "./components/index";
import {
  navLinksArray,
  servicesArray,
  projectsArray,
  socialMedia,
  contactArray,
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
        <Route
          path="/contact"
          element={<Contact contactArray={contactArray} />}
        />
      </Routes>
      <Footer navLinksArray={navLinksArray} socialMedia={socialMedia} />
    </div>
  );
}

export default App;
