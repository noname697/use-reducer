import "./App.css";
import { useReducer, useState } from "react";
import reducer, { ADICIONAR_FRASE } from "./reducer";

const App = () => {
  const [frase, setFrase] = useState("");
  const [frases, dispatch] = useReducer(reducer, []);

  const salvarFrase = (e) => {
    e.preventDefault();
    dispatch({
      tipo: ADICIONAR_FRASE,
      frase: frase,
    });
  };

  const excluir = (fraseExcluida) => {
    dispatch({
      tipo: "EXCLUIR_FRASE",
      frase: fraseExcluida,
    });
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
        <p key={index}>
          {fraseAtual} -{" "}
          <button onClick={() => excluir(fraseAtual)}>Excluir</button>
        </p>
      ))}
    </>
  );
};

export default App;
