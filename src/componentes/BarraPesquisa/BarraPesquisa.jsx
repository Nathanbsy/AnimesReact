import { useNavigate } from "react-router";
import "./BarraPesquisa.css";
import { useState } from "react";

function BarraPesquisa() {
  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();
  function pesquisar(titulo) {
    const query = new URLSearchParams();
    query.set("q", titulo);
    navigate(`/pesquisa?${query.toString()}`);
  }
  return (
    <div className="container-pesquisa">
      <input
        className="pesquisa"
        type="input"
        placeholder="Pesquisar"
        onChange={(event) => setPesquisa(event.target.value)}
      />
      <button className="btn-pesquisa" onClick={() => pesquisar(pesquisa)}>
        <i class="bi bi-search"></i>
      </button>
    </div>
  );
}

export default BarraPesquisa;
