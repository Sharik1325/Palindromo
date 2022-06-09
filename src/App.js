import logo from './logo.svg';
import './App.css';
import Palindromo from "./component/palindromo.component";

const App = () => {

  const getComponent = () =>{
    return  <Palindromo />;
  }

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

export default App;
