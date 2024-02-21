import { useRef } from "react";
import emailjs from "@emailjs/browser";
import resume from "../assets/Resume_NicolasPalma_DevFullStack_ES.pdf";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, {
        publicKey: VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="sm:p-20 p-5 bg-gradient-to-r from-green-800 to-blue-800"
      id="contact"
    >
      <div className="sm:container mx-auto">
        <h2 className="text-center text-4xl font-extrabold pb-10 text-black">Contacto</h2>
        <div className="w-full sm:flex">
          <div className="flex flex-col sm:w-1/2 w-full justify-center">
            <div className="mb-5">
              <h3 className="text-xl">GitHub</h3>
              <a
                className="text-white"
                href="https://github.com/ngpalma"
                target="_blank"
              >
                /ngpalma
              </a>
            </div>

            <div className="mb-5">
              <h3 className="text-xl">Email</h3>
              <a
                className="text-white"
                href="mailto:nicolasgerardopalma@gmail.com"
                target="_blank"
              >
                nicolasgerardopalma@gmail.com
              </a>
            </div>

            <div className="mb-5">
              <h3 className="text-xl">Telefono</h3>
              <a
                className="text-white"
                href="https://api.whatsapp.com/send?phone=+5493412628575&text=Hola%20Nicolás,%20vengo%20de%20tu%20portfolio%20y%20me%20gustaria"
                target="_blank"
              >
                +5493412628575
              </a>
            </div>

            <div className="mb-5">
              <h3 className="text-xl">LinkedIn</h3>
              <a
                className="text-white"
                href="https://www.linkedin.com/in/nicolas-gerardo-palma/"
                target="_blank"
              >
                /nicolas-gerardo-palma
              </a>
            </div>

            <div className="mb-5">
              <h3 className="text-xl">Curriculum</h3>
              <a className="text-white" href={resume} target="_blank">
                Descargar PDF
              </a>
            </div>
          </div>

          <div className="sm:w-1/2 w-full bg-gray-50 p-10 rounded-md">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="username"
                    className="block text-lg font-medium leading-6 text-gray-900"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="name"
                    className="block w-full outline-1 border border-black border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Nicolás Palma"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full outline-1 border border-black border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-600 sm:text-sm sm:leading-6"
                    placeholder="email@email.com"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium leading-6 text-gray-900"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="subject"
                    className="block w-full outline-1 border border-black border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Nuevo proyecto ..."
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium leading-6 text-gray-900"
                  >
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="message"
                    className="block w-full outline-1 border border-black border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Necesito contratar tus servicios para ..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-5 flex grid-cols-1 gap-y-8 sm:grid-cols-6">
                <button
                  type="submit"
                  className="text-lg bg-transparent mx-auto w-32 text-center rounded-md p-2 border border-1 border-black hover:bg-black hover:text-white"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
