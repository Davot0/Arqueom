import React, { useState } from 'react';

const Manuela = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formulario enviado! :)')
        setFormData({name: '', email: '', message: ''});
    }

    return (
        <div className="font-sans bg-[#f1e6ff] text-gray-900">
            <header className="bg-[#6a4fbb] text-white py-6 text-center">
                <h1 className="text-4xl font-bold mt-4">Manuela Cardona</h1>
                <nav>
                    <ul className="flex justify-center mt-4 space-x-8">
                        <li><a href="#about" className="hover:underline">Sobre mí</a></li>
                        <li><a href="#skills" className="hover:underline">Habilidades</a></li>
                        <li><a href="#hobbies" className="hover:underline">Hobbies</a></li>
                        <li><a href="#education" className="hover:underline">Formación</a></li>
                        <li><a href="#contact" className="hover:underline">Contáctame</a></li>
                    </ul>
                </nav>
            </header>

            <main id="about" className="bg-white py-20 px-8 text-center">
                <h2 className="text-3xl font-semibold text-[#6a4fbb] mb-4">Sobre mí</h2>
                <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                    <p className="text-lg mb-6">Hola, mi nombre es Manuela Cardona, tengo 19 años y soy una desarrolladora web con pasión por la tecnología y el diseño.</p>
                </div>
            </main>

            <section id="skills" className="py-20 px-8 text-center">
                <h2 className="text-3xl font-semibold text-[#6a4fbb] mb-4">Habilidades</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg">JavaScript</div>
                    <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg">React</div>
                    <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg">HTML5</div>
                    <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg">CSS</div>
                    <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg">Python</div>
                    <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg">Base de datos</div>
                    <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg">Análisis de datos</div>
                    <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg">GitHub</div>
                </div>
            </section>

            <section id="hobbies" className="bg-white py-20 px-8 text-center">
                <h2 className="text-3xl font-semibold text-[#6a4fbb] mb-4">Hobbies</h2>
                <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                    <ul className="space-y-4 text-lg">
                        <li>Leer libros de fantasía o suspenso</li>
                        <li>Escuchar pódcast sobre anécdotas</li>
                        <li>Explorar nuevos lugares</li>
                        <li>Adquirir nuevos conocimientos sobre diversos temas</li>
                        <li>Cocinar nuevas recetas</li>
                    </ul>
                </div>
            </section>

            <section id="education" className="bg-white py-20 px-8 text-center">
                <h2 className="text-3xl font-semibold text-[#6a4fbb] mb-4">Formación Académica</h2>
                <div className="bg-[#e0c6f8] p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                    <ul className="space-y-4 text-lg">
                        <li>SENA - Servicio Nacional de Aprendizaje</li>
                        <li>Bachillerato Académico</li>
                    </ul>
                </div>
            </section>

            <section id="contact" className="bg-[#6a4fbb] py-20 px-8 text-white text-center">
                <h2 className="text-3xl font-semibold mb-6">Contáctame</h2>
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-lg border-2 border-gray-300"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu correo"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-lg border-2 border-gray-300"
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-lg border-2 border-gray-300"
                    />
                    <button
                        type="submit"
                        className="w-full py-4 bg-[#5a42a0] text-white font-semibold rounded-lg hover:bg-[#6a4fbb]"
                    >
                        Enviar
                    </button>
                </form>
            </section>

            <footer className="bg-[#6a4fbb] text-white py-4 text-center">
                <p>&copy; 2025 Manuela Cardona - Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Manuela;
