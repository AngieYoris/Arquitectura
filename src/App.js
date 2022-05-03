import {expresionRegular, Formulario, Label, LeyendaError, Terminos, BotonCen, Boton, Mensaje, Error} from './Elementos/Formularios';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Componentes/Input';


const App = () => {
  const [usuario, cambiarUsuario] = useState({campo: '', valido: null})
  const [correo, cambiarCorreo] = useState({campo: '', valido: null})
  const [telefono, cambiarTelefono] = useState({campo: '', valido: null})
  const [password, cambiarPassword] = useState({campo: '', valido: null})
  const [password2, cambiarPassword2] = useState({campo: '', valido: null})
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }
  const validarPassword2 = () =>{
    if(password.campo.length > 0){
      if(password.campo != password2.campo){
          cambiarPassword2((prevState) =>{
              return {...prevState, valido: 'false'}
          });    
        
      }else{
        cambiarPassword2((prevState) =>{
          return {...prevState, valido: 'true'}
      });    
      }
    }
  }

  const onChangeTerminos = (e) => {
      cambiarTerminos(e.target.checked);
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if(
      usuario.valido === 'true' && 
      correo.valido === 'true' &&
      telefono.valido === 'true' && 
      password.valido === 'true' &&
      password2.valido === 'true' && 
      terminos
            
      ){
        cambiarFormularioValido(true);
        cambiarUsuario({campo:'', valido: null});
        cambiarCorreo({campo:'', valido: null});
        cambiarTelefono({campo:'', valido: null});
        cambiarPassword({campo:'', valido: null});
        cambiarPassword2({campo:'', valido: 'null'});

        
      }else{
        cambiarFormularioValido(false);
      }


  }


   return(
        <main> 
          <Formulario action="" onSubmit={onSubmit}>
 
          

          <div>
             <h1>CREAR USUARIO</h1>
          </div>

          <Input 
              estado={usuario}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              label="Usuario"
              placeholder="Nombre competo"
              name="usuario"
              LeyendaError="Ingresar nombre completo"
              expresionRegular={expresiones.usuario}
          
          />
          
          <Input 
              estado={correo}
              cambiarEstado={cambiarCorreo}
              tipo="email"
              label="Correo Electronico"
              placeholder="Ej: correo@correo.com"
              name="correo"
              LeyendaError="Ingresar de manera correcta el correo"
              expresionRegular={expresiones.correo}
          
          />

            <Input 
              estado={telefono}
              cambiarEstado={cambiarTelefono}
              tipo="text"
              label="Telefono/Celular"
              placeholder="Ej: 300 000 4444"
              name="telefono"
              LeyendaError="Solo debe contener numeros"
              expresionRegular={expresiones.password}
          
          /> 
           
           <Input 
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo="password"
              label="Contraseña"
              placeholder="Ingrese contraseña"
              name="password"
              LeyendaError="La contraseña debe ser de 4 a 12 digitos"
              expresionRegular={expresiones.password}
          
          /> 

          <Input 
              estado={password2}
              cambiarEstado={cambiarPassword2}
              tipo="password"
              label="Repetir contraseña"
              placeholder="Ingrese contraseña de nuevo"
              name="password2"
              leyendaError="Ambas contraseñas deben ser iguales."
              funcion={validarPassword2}
          /> 
          
          
          <Terminos>
             <Label>
                <input 
                  type="checkbox" 
                  name="terminos" 
                  id="terminos" 
                  checked={terminos}
                  onChange={onChangeTerminos}
                  
                  />
                Acepto los Terminos y Condiciones
             </Label>
           </Terminos>

           

           

           {formularioValido === false && <Error>
              <p>  
                 <FontAwesomeIcon icon={faExclamationTriangle} />
                 <b>Error:</b>Por favor rellene registro correctamente.
              </p>
           </Error>}

          <BotonCen>
              <Boton type="submit">Registrar</Boton>
              {formularioValido === true && <Mensaje>Registro realizado exitosamente</Mensaje>}
            </BotonCen>

            <p>¿Ya tienes cuenta?<a href="#">Iniciar sesion</a></p>

          </Formulario>
          
       </main>
      
   );

}
export default App;
