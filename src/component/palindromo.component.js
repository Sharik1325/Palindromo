import {useState} from "react";
import {isPalindrome} from "../model/palindromo";

const Palindromo = () => {
    const [palabra, setPalabra] = useState(undefined);
    const [respuesta, setRespuesta] = useState(undefined);

    return (
        <div className="palindromo">
            <label htmlFor="fname">Ingrese una palabra: </label>
            <input
                type="text"
                id="fname"
                name="fname"
                onChange={(event) => {
                    setPalabra(event.target.value);
                }}
            />
            <br/>
            <button
                name="button"
                onClick={() => {
                    console.log('palabra->', palabra)
                    const resp = isPalindrome(palabra);
                    setRespuesta(resp);
                }}
            >¿Es palindroma?
            </button>
            <br/>
            <label htmlFor="fname">
                {
                    respuesta !== undefined && (respuesta ? "Si es palindromo" : "No es palindromo")
                }
            </label>
        </div>
    );
}

export default Palindromo;