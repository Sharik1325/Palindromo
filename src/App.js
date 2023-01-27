import logo from './logo.svg';
import './App.css';
import Palindromo from "./component/palindromo.component";

const App = () => {
// Esta funcion devuelve palindromo de palindromo.component.js
  const getComponent = () =>{
    return  <Palindromo />;
  }

  //La funcion App me retorna un componente html que integra otro componente donde el codigo está en palindromo.component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Palindromo
        </p>
        {getComponent()}
      </header>
    </div>
  );
}

export default App;// se indica el recurso que se va  a exportar
