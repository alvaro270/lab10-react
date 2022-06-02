import { Controls, Table } from "./components";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const datos = [
    {
      nombre: "Alvaro",
      apellido: "Huaman",
      celular: "123456789",
      correo: "alvaro@gmail.com",
    },
    {
      nombre: "Jairo",
      apellido: "Zarate",
      celular: "88888",
      correo: "jairo@gmail.com",
    },
    {
      nombre: "Camilo",
      apellido: "Jimenez",
      celular: "99999",
      correo: "camilo@gmail.com",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React!</p>
        <Table datos={datos} />
        <Controls sumar={"Texto para sumar"} restar="texto para restar" />
      </header>
    </div>
  );
};

export default App;
