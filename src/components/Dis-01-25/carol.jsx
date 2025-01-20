import { NavLink, useNavigate} from "react-router-dom"
import React from 'react';

const LandingPageCarol = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 fixed w-full top-0 z-10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
               <li className="m-3 text-xl">
                    <NavLink to="/welcome">
                        Volver
                    </NavLink>
                </li>
          <h1 className="text-2xl font-bold text-emerald-600">Carol Acevedo 💛</h1>
          <ul className="flex space-x-6">
            <li><a href="#inicio" className="text-gray-600 hover:text-emerald-600 transition-colors">Inicio</a></li>
            <li><a href="#sobre-mi" className="text-gray-600 hover:text-emerald-600 transition-colors">Sobre mí</a></li>
            <li><a href="#educacion" className="text-gray-600 hover:text-emerald-600 transition-colors">Educación</a></li>
            <li><a href="#contacto" className="text-gray-600 hover:text-emerald-600 transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow mt-20 px-6">
        <section id="inicio" className="max-w-6xl mx-auto py-20 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">¡Hola! Bienvenid@</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mi nombre es Carol Acevedo. Soy una apasionada por el desarrollo web.
          </p>
        </section>

        {/* Sobre mí */}
        <section id="sobre-mi" className="max-w-6xl mx-auto py-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre mí</h2>
            <p className="text-gray-600 leading-relaxed">
              Soy analista y desarrolladora de software con experiencia en la gestión de acceso,
              gestión de roles, gestión de usuarios y lo que tiene que ver con permisos o privilegios
              que puede tener un rol. Trabajé con node.js para la parte de backend, para la parte del
              frontend utilicé angular y para la parte móvil utilicé flutter. El proyecto que creé junto
              con mi equipo se llama ComerciPlus y fue entregado a un cliente real satisfactoriamente.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <h3 className="font-bold text-emerald-600">Backend</h3>
                <p className="text-gray-600">Node.js</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <h3 className="font-bold text-emerald-600">Frontend</h3>
                <p className="text-gray-600">Angular</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <h3 className="font-bold text-emerald-600">Mobile</h3>
                <p className="text-gray-600">Flutter</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Pasatiempos</h2>
            <p className="text-gray-600 leading-relaxed">
            Me considero una persona muy creativa, me gusta mucho pintar, dibujar, jugar videojuegos y manejar moto.
            </p>
          </div>
        </section>

        {/* Educación*/}
        <section id="educacion" className="max-w-6xl mx-auto py-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Educación</h2>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Centro de Servicios y Gestión Empresarial - SENA</h3>
                <p className="text-gray-600 mt-2">Tecnología en Analisis y Desarrollo de Software</p>
              </div>
            </div>
          </div>
        </section>
        
          {/* Contacto */}
          <section id="contacto" className="max-w-6xl mx-auto py-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contacto</h2>
            <form className="max-w-2xl mx-auto">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Carol Acevedo</h3>
            <p className="text-gray-400">Desarrolladora y Analista</p>
          </div>
          <div className="flex space-x-4">
            <a href="#https://github.com/" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="#https://mail.google.com/mail/u/0/#inbox" className="hover:text-emerald-400 transition-colors">Gmail</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageCarol;