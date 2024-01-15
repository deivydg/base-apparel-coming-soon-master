import React, { useState } from 'react';

function Correo() {
  // Expresión regular para validar el formato del correo electrónico
  const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  // Estados para manejar el valor del correo, su validez y mostrar el mensaje de error
  const [correo, setCorreo] = useState('');
  const [esValido, setEsValido] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  // Manejador de cambio del campo de correo electrónico
  //@ts-ignore
  const handleCorreoChange = (event) => {
    const nuevoCorreo = event.target.value;
    setCorreo(nuevoCorreo);
    setEsValido(expReg.test(nuevoCorreo));
    setMostrarMensaje(false); // Ocultar el mensaje de error cuando se realiza un cambio
  };

  // Manejador de envío del formulario
  const handleSubmit = () => {
    console.log('Correo:', correo);
    setMostrarMensaje(!esValido); // Mostrar el mensaje si el correo no es válido
  };

  return (
    <div className='containerCorreo'>
      <br />
      {/* Entrada de texto para el correo electrónico */}
      <input
        type="text"
        id="correo"
        onChange={handleCorreoChange}
        placeholder='Email Address'
        // Clase condicional para agregar 'error' al input cuando hay un error
        className={`correoText ${mostrarMensaje && !esValido ? 'error' : ''}`}
      />
      {/* Botón de envío con un ícono */}
      <button onClick={handleSubmit} className='BotonCorreo'>
        <img src="/src/assets/icon-arrow.svg" alt="" />
      </button>
      {/* Mensaje de error */}
      {mostrarMensaje && !esValido && (
        <p className='TextoError'>
          Pleace provide a valid email
        </p>
      )}
    </div>
  );
}

export default Correo;
