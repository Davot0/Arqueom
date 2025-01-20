import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import { Book, Gamepad2, Dumbbell, Laptop, Pen, User, Briefcase, GraduationCap, Contact, } from 'lucide-react';

const Jhojan = () => {
  // Añade estos estados y funciones justo aquí, después de la declaración del componente
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      console.log('Formulario enviado:', formData);
      setFormData({
        nombre: '',
        email: '',
        mensaje: ''
      });
      alert('Mensaje enviado con éxito!');
    } else {
      setErrors(formErrors);
    }
  };
  return (

    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100 text-gray-800">
        <div className="text-xl font-bold tracking-tight hover:text-gray-600 transition-colors">
          <NavLink to="/welcome">
            Volver
          </NavLink>
        </div>
        <ul className="flex gap-8 m-0 p-0 list-none">
          {[
            { href: "#about", text: "Acerca de mí", icon: <User size={16} className="text-blue-500" /> },
            { href: "#hobbies", text: "Pasatiempos", icon: <Briefcase size={16} className="text-purple-500" /> },
            { href: "#contact", text: "Contacto", icon: <Contact size={16} className="text-green-500" /> }
          ].map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-gray-600 no-underline text-sm hover:text-gray-900 transition-colors flex items-center gap-2">
                {item.icon}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/*Contenedor principal*/}
      <main className="flex-grow p-6 md:p-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección Acerca de mí */}
          <section id="about" className="md:col-span-2 p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 scroll-margin-top-24 pt-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <img
                  src='https://imgs.search.brave.com/KToYn3ve_0dxx5SOagkLDSGEpPTiZQgLKKvffUokF2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/a3o4ZDNuajgwaWJl/MS5wbmc_YXV0bz13/ZWJwJnM9OWUxMTU3/NmM1MzU2NmFjZTBj/ZGFlZWQ4ZDFkOWZh/MzM0NzRmNjkxYw'
                  alt="Imagen de perfil"
                  className="rounded-full w-36 h-36 object-cover shadow-lg ring-4 ring-white"
                />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-50 blur-xl -z-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Acerca de mí</h1>
                <p className="text-gray-600 leading-relaxed">
                  Soy una persona que le gusta mucho el conocimiento y aprender constantemente cosas nuevas.
                </p>
              </div>
            </div>
          </section>

          <div className="md:col-span-2 text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Mis Actividades</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Sección Pasatiempos  */}
          <section id="hobbies" className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 md:translate-y-4 scroll-margin-top-24 pt-20">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Pasatiempos</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Me gusta leer mangas, jugar videojuegos e ir al gym.</p>
            <div className="flex justify-around gap-6">
              {[
                { icon: <Book size={32} />, label: "Lectura", color: "text-blue-500" },
                { icon: <Gamepad2 size={32} />, label: "Gaming", color: "text-purple-500" },
                { icon: <Dumbbell size={32} />, label: "Ejercicio", color: "text-red-500" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 group">
                  <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Sección Estudios  */}
          <section id="education" className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 md:translate-y-4 scroll-margin-top-24 pt-20">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Estudios</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Tengo experiencia en desarrollo web, JavaScript, Angular, y otras tecnologías modernas.
            </p>
            <div className="flex justify-around gap-6">
              {[
                { icon: <Laptop size={32} />, label: "Desarrollo Web", color: "text-green-500" },
                { icon: <Book size={32} />, label: "JavaScript", color: "text-yellow-500" },
                { icon: <Pen size={32} />, label: "Angular", color: "text-red-500" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 group">
                  <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/*  Sección de Contacto */}
          <section id="contact" className="md:col-span-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden scroll-margin-top-24 pt-20">
            <div className="grid md:grid-cols-2">
              {/* Imagen Para el Form */}
              <div className="relative h-64 md:h-full">
                <img
                  src='https://imgs.search.brave.com/9Zi2UdadUE4HPwBaRNHbs_qEKnt-Gn7ItQLyeHWGwd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMzg5/MjQucGNkbi5jby93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/OS9Gb3JtLUltYWdl/cy5wbmc'
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
              </div>

              {/* Formulario  */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Contáctame</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.nombre ? 'border-red-500' : 'border-gray-200'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.mensaje ? 'border-red-500' : 'border-gray-200'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                      rows={4}
                      placeholder="Tu mensaje..."
                    />
                    {errors.mensaje && (
                      <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 mt-12">
        <p className="text-sm"> 2025 Jhojan. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};



export default Jhojan;