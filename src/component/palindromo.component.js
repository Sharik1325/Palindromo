import {useState} from "react";
import {isPalindrome} from "../model/palindromo";

const Palindromo = () => {
    const [palabra, setPalabra] = useState(undefined);// use estate crea estados para estrablecer en palindromo en las varibles
    const [respuesta, setRespuesta] = useState(undefined);

    return (
        <div className="palindromo">
            <label htmlFor="fname">Ingrese una palabra: </label>
            <input
                type="text"
                id="fname"
                name="fname"
                onChange={(event) => { // Escucha eventos cuando algo cambia
                    setPalabra(event.target.value);// setea el evento - reinicia elevento
                }}
            />
            <br/>
            <button
                name="button"
                onClick={() => {// habilidad de button para que tenga la accion de mostrar el resultado
                    console.log('palabra->', palabra)
                    const resp = isPalindrome(palabra);// se crea la variable resp para darle una condicion a ispalindrome de plindromo.js
                    setRespuesta(resp);//setea la respuesta
                }}
            >¿Es palindroma?
            </button>
            <br/>
            <label htmlFor="fname">
                {// condicion ternaria que si respuesta no es vacion evalue si es verdadera si es si no es verdadera no es
                    respuesta !== undefined && (respuesta ? "Si es palindromo" : "No es palindromo")
                }
            </label>
        </div>
    );
}

export default Palindromo; // Se llama el componente