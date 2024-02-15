import rym from "../assets/App rick y morty captura.png";
import countries from "../assets/Countries captura.png";
import toolverse from "../assets/ToolVerse captura.png";
import splendid from "../assets/Logo Splendid.jpg";
import creando from "../assets/Creando....png";
import petpal from "../assets/PetPal.png";

function Projects() {
  return (
    <section
      className="lg:p-20 p-5 bg-gradient-to-r from-green-900 to-blue-900"
      id="portfolio"
    >
      <div className="lg:container mx-auto">
        <h2 className="text-center text-4xl font-bold pb-10">Proyectos</h2>
        <div className="lg:columns-4 sm:columns-2">
          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">Rick & Morty</h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={rym} />
          </div>

          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">Info Paises</h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={countries} />
          </div>

          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">Tool Verse</h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={toolverse} />
          </div>

          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">spLENDid</h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={splendid} />
          </div>
        </div>
        <div className="lg:columns-4 sm:columns-2">
          <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-md">
            <h3 className="text-xl mb-5">PetPal - En curso</h3>
            <img className="rounded-md h-48 max-h-48 w-full" src={petpal} />
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
