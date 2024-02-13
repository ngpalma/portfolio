function NavBar() {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="sm:hidden pt-3 pb-2">
          <ul className="flex justify-center gap-10">
            <li className="hover:text-gray-500">
              <a href="#about">Sobre mi</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#services">Servicios</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#portfolio">Proyectos</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
        <nav className="justify-between items-center h-10 p-10 hidden sm:flex">
          {/* <!-- images --> */}
          <img
            className="h-5"
            src="https://rabiulislam.dev/documents/images/portfolio/portfolio.png"
          />

          {/* <!-- menu --> */}
          <ul className="flex gap-10">
            <li className="hover:text-gray-500">
              <a href="#about">Sobre mi</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#services">Servicios</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#portfolio">Proyectos</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#contact">Contacto</a>
            </li>
          </ul>

          {/* <!-- auth --> */}
          <a
            className="px-5 py-1 bg-gray-50 rounded-full ring-1 ring-gray-100 hover:bg-white"
            href="#contact"
          >
            Contratame
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
