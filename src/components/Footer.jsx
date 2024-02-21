import logo from "../assets/Mi Logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black lg:p-5 p-5">
      <section className="container mx-auto">
        <div className="sm:grid justify-between sm:grid-cols-1 lg:grid-cols-2">
          <div className="gap-5">
            <div className="flex justify-center items-center">
              <img className="h-52 w-52" src={logo} alt="logo" />
            </div>
            <p className="text-white text-center">
              Contactame para hacer realidad tus ideas
            </p>
          </div>

          <div className="flex mt-10 sm:mt-0 justify-center items-center">
            <ul className="flex flex-col">
              <li className="m-3 hover:text-gray-500 text-white">
                <a href="#about">Sobre mi</a>
              </li>
              <li className="m-3 hover:text-gray-500 text-white">
                <a href="#services">Servicios</a>
              </li>
              <li className="m-3 hover:text-gray-500 text-white">
                <a href="#portfolio">Proyectos</a>
              </li>
              <li className="m-3 hover:text-gray-500 text-white">
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>

          {/* <div className="mt-10 sm:mt-0">
            <ul>
              <li className="m-3 hover:text-gray-500">
                <a href="#about">Sobre mi</a>
              </li>
              <li className="m-3 hover:text-gray-500">
                <a href="#services">Servicios</a>
              </li>
              <li className="m-3 hover:text-gray-500">
                <a href="#portfolio">Proyectos</a>
              </li>
              <li className="m-3 hover:text-gray-500">
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div> */}

          {/* <div className="mt-10 sm:mt-0">
            <ul>
              <li className="m-3 hover:text-gray-500">
                <a href="#about">Sobre mi</a>
              </li>
              <li className="m-3 hover:text-gray-500">
                <a href="#services">Servicios</a>
              </li>
              <li className="m-3 hover:text-gray-500">
                <a href="#portfolio">Proyectos</a>
              </li>
              <li className="m-3 hover:text-gray-500">
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div> */}
        </div>
        <p className="text-center text-white pt-6">
          &copy; {new Date().getFullYear()} Nicolás Palma - Mi Portfolio
        </p>
      </section>
    </footer>
  );
}

export default Footer;
