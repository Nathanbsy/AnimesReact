import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Pesquisar from "./pages/Pesquisar.jsx";
import Temporada from "./pages/Temporada.jsx";
import Nav from "./componentes/Nav/Nav.jsx";
import Detalhes from "./pages/Detalhes.jsx";
import MinhaLista from "./pages/MinhaLista.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pesquisa" element={<Pesquisar />} />
        <Route path="temporada" element={<Temporada />} />
        <Route path="detalhes" element={<Detalhes />} />
        <Route path="minhalista" element={<MinhaLista />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
