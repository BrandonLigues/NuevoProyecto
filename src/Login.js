import React, { useEffect } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function App() {

    useEffect(() => {
        const forms = document.querySelectorAll('.needs-validation');
    
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
    
            form.classList.add('was-validated');
          }, false);
        });
      }, []);

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>

            <form className='needs-validation' noValidate>
                <h3 className='text-center'>Inicia Sesion</h3>

                <div className='mb-2'>
                    <label htmlFor="email">Correo</label>
                    <input type="email" placeholder='Ingresa Tu Correo' className='form-control' required/>
                    <div className="valid-feedback">
                        Correo Valido
                    </div>
                    <div className="invalid-feedback">
                        Correo Invalido
                    </div>
                </div>

                <div className='mb-2'>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" placeholder='Ingresa Tu Contraseña' className='form-control' minLength='8'required/>
                    <div className="valid-feedback">
                        Contraseña Valida
                    </div>
                    <div className="invalid-feedback">
                        Contraseña Invalida
                    </div>
                </div>

                <div className='d-grid'>
                    <button className='btn btn-primary'>Iniciar Sesion</button>
                </div>

                <p className='text-end mt-2'>
                    <a href=''>¿Olvidaste Tu Contraseña?</a><Link to="/Registro" className='ms-2'>Registrarte</Link>
                </p>
            </form>
        </div>
    </div>       

  );
}

export default App;