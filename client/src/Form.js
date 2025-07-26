import React, { useState } from 'react';

const ContactForm = () => {
 const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    importancia: '',
    pregunta: '',
 });

 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Aquí puedes agregar la lógica para enviar el formulario, como por ejemplo llamar a una API
    const formData = new URLSearchParams();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    // Enviar los datos del formulario al servidor
    fetch('http://localhost:3000/contactos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('respuesta del server', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
 };



 return (
    <form className="contact-form" onSubmit={handleSubmit} action="http://localhost:3000/contactos" method="post">
      <h2>Contactanos</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre y Apellido"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Número de Teléfono"
        value={form.telefono}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fecha"
        value={form.fecha}
        onChange={handleChange}
        required
      />
      <select
        name="importancia"
        value={form.importancia}
        onChange={handleChange}
        required
      >
        <option value="">Importancia de tu Pregunta</option>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
      <textarea
        name="pregunta"
        placeholder="Haz tu Pregunta"
        value={form.pregunta}
        onChange={handleChange}
        required
      />
      <button type="submit">¡ENVIAR!</button>
    </form>
 );
};

export default ContactForm;
