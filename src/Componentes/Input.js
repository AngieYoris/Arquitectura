import React from "react";
import {Input, GrupoInput, IconoValidacion, Label, LeyendaError,} from './../Elementos/Formularios';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput =({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
    const onChange = (e) =>{
        cambiarEstado({...estado, campo: e.target.value})
    }
    const validacion = () =>{
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'})
            }else{
                cambiarEstado({...estado, valido: 'false'})
                
            }
        }
        if(funcion){
            funcion();
        }
        
    }
    
    return (
        <div>
            <Label htmlFor="nombre">{label}</Label>
            <GrupoInput>
              <Input type={tipo}
               placeholder={placeholder}
               id={name}
               value={estado.campo}
               onChange={onChange}
               onKeyUp={validacion}
               onBlur={validacion} 
               valido={estado.valido}
               
             />
              <IconoValidacion icon={faCheckCircle}/>
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
     </div>
    );
    
}
export default ComponenteInput;


