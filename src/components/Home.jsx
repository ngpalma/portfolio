import photo from "../assets/Photo About.png";


function Home() {
  return (
    <section className="p-20">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col gap-5 text-center">
            <img
              className="rounded-full bg-gray-50 h-66 w-56 mx-auto"
              src={photo}
            />
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-6xl">Nicolás Palma</h1>
              <p className="text-gray-500 text-sm">
                Desarrollador Web Full Stack (Javascript, React, PostgreSQL,
                Node, Express)
              </p>
            </div>
            <a
              href="#contact"
              className="bg-gray-50 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white"
            >
              Contratame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
