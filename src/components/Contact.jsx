import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_22zglk6",
        "template_s2zrgs4",
        form.current,
        "iJT2BdjekCxbjRMBG"
      )
      .then(
        () => {
          alert("Su correo ha sido enviado con éxito");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.453303351256!2d-76.97812662489585!3d-12.137742066312732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b87064befe7b%3A0xb3c67d7f3675865d!2sJir%C3%B3n%20Cerro%20Verde%20449%2C%20Lima%2015803!5e0!3m2!1ses!2spe!4v1703889713619!5m2!1ses!2spe"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Email
              </h2>
              <p className="text-indigo-400 leading-relaxed">
                carlosfelipefdezfalcon@gmail.com
              </p>

              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                Número de Teléfono
              </h2>

              <a href="https://wa.link/uxe566" target="_blank" rel="noopener noreferrer">
                <p className="leading-relaxed hover:tex-gray-700">
                  +51993348503
                </p>
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contacta Conmigo
          </h2>
          <p className="leading-relaxed mb-5">Puedes enviarme un correo a través del siguiente Formulario</p>
          <div className="relative mb-4">
            <label>Nombre</label>
            <input
              type="text"
              name="user_name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            type="submit"
            value="Enviar"
          >Enviar</button>
        </form>
      </div>
    </section>
  );
}
