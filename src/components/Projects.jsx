import rym from "../assets/App rick y morty captura.png";
import countries from "../assets/Countries captura.png";
import toolverse from "../assets/ToolVerse captura.png";
import splendid from "../assets/Logo Splendid.jpg";
import creando from "../assets/Creando....png";

function Projects() {
  return (
    <section
      className="lg:p-20 p-5 bg-gradient-to-r from-green-800 to-blue-800"
      id="portfolio"
    >
      <div className="lg:container mx-auto">
        <h2 className="text-center text-4xl font-extrabold pb-10 text-black">
          Proyectos
        </h2>
        <div className="lg:columns-4 sm:columns-2">
          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">
              <a href="https://github.com/ngpalma/rick_and_morty" target="_blank">Rick & Morty</a>
            </h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={rym} />
          </div>

          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">
              <a href="https://github.com/ngpalma/Countries" target="_blank">Info Paises</a>
            </h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={countries} />
          </div>

          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">
              <a href="https://github.com/ngpalma/clientToolVerse" target="_blank">Tool Verse</a>
            </h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={toolverse} />
          </div>

          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">
              <a href="https://github.com/ngpalma/client-spLENDid-app" target="_blank">spLENDid - En curso</a>
            </h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={splendid} />
          </div>
        </div>
        <div className="lg:columns-4 sm:columns-2">
          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">Reservado</h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={creando} />
          </div>
          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">Reservado</h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={creando} />
          </div>
          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">Reservado</h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={creando} />
          </div>
          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">Reservado</h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={creando} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
