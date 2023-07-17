import React from 'react';
import './Form.css';


function Form() {
   
  
    return (
    <div>
      <form className="formulario">
        <label htmlFor="nombre">Full Name*</label>
        <input name="nombre" id="nombre" />
        <label htmlFor="email">Email*:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="mensaje">Message*</label>
        <textarea id="mensaje" name="mensaje" rows="4" />
        <button  className='button-form' >Enviar</button>
            
      </form>
    </div>
  );
}

export default Form;
