import React, { useState } from 'react';

function Correo() {
  const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const [correo, setCorreo] = useState('');
  const [esValido, setEsValido] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleCorreoChange = (event) => {
    const nuevoCorreo = event.target.value;
    setCorreo(nuevoCorreo);
    setEsValido(expReg.test(nuevoCorreo));
    setMostrarMensaje(false);
  };

  const handleSubmit = () => {
    console.log('Correo:', correo);
    setMostrarMensaje(!esValido);
  };

  return (
    <div className='containerCorreo'>
      <br />
      
      <input
        type="text"
        id="correo"
        onChange={handleCorreoChange}
        placeholder='Email Address'
        className={`correoText ${mostrarMensaje && !esValido ? 'error' : ''}`}
      />
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
