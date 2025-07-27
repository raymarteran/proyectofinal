import React, { useState } from 'react';

const ContactForm = () => {
  const initialFormState = {
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    pregunta: '',
  };

  const [form, setForm] = useState(initialFormState);
  const [showModal, setShowModal] = useState(false);
  const [respuesta, setRespuesta] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const formData = new URLSearchParams();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    console.log('formData', formData.toString());
    fetch('http://localhost:3000/contactos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data.agregado);
      setRespuesta(data.agregado);
      setShowModal(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setForm(initialFormState); // Clear form fields
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit} action="http://localhost:3000/contactos" method="post">
        <h2 className='mb-4'>¡Bienvenido a tu visita Guiada!</h2>
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
        <textarea
          name="pregunta"
          placeholder="Cuetanos que te gustaria hacer"
          value={form.pregunta}
          onChange={handleChange}
          required
        />
        <button type="submit">¡ENVIAR!</button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Se ha Registrado Satisfactoriamente</h2>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

