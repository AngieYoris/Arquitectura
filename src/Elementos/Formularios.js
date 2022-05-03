import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const colores ={
    border: "#0075FF",
    error: "#bb2929",
    exito: "1ed12d",
    

}


const Formulario = styled.form`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%
    position: relative;
    
`;
 const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
 `;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;
const Input = styled.input`
    width: 100%
    background: #83ABA8;
    border-radius: 3px;
    height:45px;
    line-height: 45px;
    padding: 0 40 px 0 18px;
    transition: .3s ease all;
    border: 2px solid #343939;

    &:focus{
        border: 3px solid ${colores.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);

    }
    
`;
const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none; 
   
    ${props =>props.valido === 'true' && css`
   
    display: none;
`}
${props =>props.valido === 'false' && css`
    display: block;
 `}
        
`;
const IconoValidacion =styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    botton: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

`;

const Terminos = styled.div`
    grid-column: span 2;


    input{
        margin-right:10px;
    }
`;
const BotonCen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const Boton = styled.button`
    height:45px;
    line-height: 45px;
    width: 30;
    background: #1C63DF;
    color: #ffff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1a ease all;

    &:hover{
        box-shadow: 3px 0px 30 px rgba(163,163,163, 1);
    }

`;
const Mensaje = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    
`;

const Error = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colores.error};
    padding: 0px 15px;
    border-radius: 3px;
    
    p{
        margin: 0;
    }
    b{
        margin-left: 10px;
    }
`;


export {
    Formulario, 
    Label,
    GrupoInput, 
    Input, 
    LeyendaError,
    IconoValidacion,    
    Terminos, 
    BotonCen, 
    Boton, 
    Mensaje, 
    Error};






