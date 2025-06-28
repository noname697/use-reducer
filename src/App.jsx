import "./App.css";
import { useReducer, useState } from "react";
import reducer, { ADICIONAR_FRASE } from "./reducer";

const App = () => {
  // lista de frases (estado)

  // o usuario pode adicionar novas frases, desde que:
  // 1. A frase não possua mais que 20 caracteres
  // 2. A frase seja única

  const [frase, setFrase] = useState("");
  // const [frases, setFrases] = useState([]);
  const [frases, dispatch] = useReducer(reducer, []);

  const salvarFrase = (e) => {
    e.preventDefault();
    dispatch({
      tipo: ADICIONAR_FRASE,
      frase: frase,
    });
    // setFrases([...frases, frase]);
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
      {frases.map((fraseAtual, index) => (
        <p key={index}>{fraseAtual}</p>
      ))}
    </>
  );
};

export default App;
