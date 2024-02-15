import logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black lg:p-20 p-10">
      <section className="container mx-auto">
        <div className="sm:grid justify-between sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-5 flex-col">
            <img className="h-6 w-1/2" src={logo} alt="logo" />
            <p>Contactame para hacer realidad tus ideas</p>
          </div>

          <div className="mt-10 sm:mt-0">
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
          </div>

          <div className="mt-10 sm:mt-0">
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
          </div>

          <div className="mt-10 sm:mt-0">
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
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
