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

  const salvarFrase = (e) => {
    e.preventDefault();
    if(frase.length < 20){
      alert("Ops... Não são permitidas frases com menos de 20 caracteres.");
      return
    }
  };

  return (
    <>
      <form onSubmit={salvarFrase}>
        <textarea
          value={frase}
          onChange={(e) => setFrase(e.target.value)}
          placeholder="Digite sua frase..."
          required
        />
        <br />
        <button>Salvar Frase</button>
      </form>
    </>
  );
};

export default App;
