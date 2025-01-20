import React, { useState } from "react";

const Estefania = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      <header className="bg-[#527B9E] text-white flex items-center justify-between py-4 px-8 shadow-lg fixed w-full top-0 left-0 z-10">
        <h1 className="text-3xl font-bold">Hola, soy Estefanía Díaz Lopera</h1>
        <nav className="space-x-6">
          <a href="#sobre-mi" className="hover:text-gray-300">Sobre mí</a>
          <a href="#estudios" className="hover:text-gray-300">Estudios</a>
          <a href="#habilidades" className="hover:text-gray-300">Habilidades</a>
          <a href="#hobbies" className="hover:text-gray-300">Hobbies</a>
          <a href="#contacto" className="hover:text-gray-300">Contacto</a>
        </nav>
      </header>

      <main className="py-16 px-8 pt-24">
        <section id="sobre-mi" className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Sobre mí</h2>
          <p className="mt-4 text-gray-600 text-center">
            Actualmente, estoy realizando la etapa práctica de la Tecnología en Análisis y Desarrollo de Software.
          </p>
          <p className="mt-4 text-gray-600 text-center">
            Estoy fortaleciendo mis
            habilidades para ser una gran profesional y ofrecer excelentes
            soluciones en el ámbito del desarrollo web.
          </p>
        </section>

        <section id="estudios" className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Estudios</h2>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {["Bachiller académico", "Técnica en Programación de Software", "Curso HTML y CSS"].map((study, index) => (
              <div key={index} className="bg-[#527B9E] p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-white">{study}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="habilidades" className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Habilidades</h2>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {["HTML", "CSS", "JavaScript", "React", "NodeJS", "Python"].map((skill, index) => (
              <div key={index} className="bg-[#527B9E] p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="hobbies" className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Hobbies</h2>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {["Leer", "Tejer", "Viajar"].map((hobbie, index) => (
              <div key={index} className="bg-[#527B9E] p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-white">{hobbie}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-[#527B9E] text-white py-16 text-center shadow-md">
          <h2 className="text-3xl font-semibold">¡Contáctame!</h2>

          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            <div>
              <label
                htmlFor="nombre"
                className="block text-left text-gray-700 font-semibold"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#527B9E]"
              />
            </div>
            <div>
              <label
                htmlFor="correo"
                className="block text-left text-gray-700 font-semibold"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#527B9E]"
              />
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-left text-gray-700 font-semibold"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#527B9E]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#527B9E] text-white py-3 rounded-lg hover:bg-[#6C99B3] transition duration-200"
            >
              Enviar mensaje
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 Estefanía Díaz Lopera. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Estefania;

