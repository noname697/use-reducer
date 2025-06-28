import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  // lista de frases (estado)

  // o usuario pode adicionar novas frases, desde que:
  // 1. A frase não possua mais que 20 caracteres
  // 2. A frase seja única

  const [frase, setFrase] = useState("");

  const salvarFrase = (e) => {};

  return (
    <>
      <form onSubmit={salvarFrase}>
        <textarea
          value={frase}
          onChange={(e) => setFrase(e.target.value)}
          required
        />
        <br />
        <button>Salvar Frase</button>
      </form>
    </>
  );
};

export default App;
