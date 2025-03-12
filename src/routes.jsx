import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Pesquisar from "./pages/Pesquisar";
import Nav from "./componentes/Nav/Nav";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pesquisa" element={<Pesquisar />} />
        <Route path="temporada" element={<Temporada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
