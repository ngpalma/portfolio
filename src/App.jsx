import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <NavBar />

      {/* <!-- contenido principal --> */}
      <main>
        <Home />

        {/* <!-- sobre mi --> */}
        <About />

        {/* <!-- servicios --> */}
        <Services />

        {/* <!-- proyectos --> */}
        <Projects />

        {/* <!-- contacto --> */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
