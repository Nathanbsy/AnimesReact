import { Link, useLocation } from "react-router";

function NavLink({ to, children }) {
  //Declarando a localização da página para a marcação do link
  const localizacao = useLocation();

  return (
    //Usando o link do router para a atualização dinâmica da página
    <li className={`${localizacao.pathname === to ? "linkativo" : ""}`}>	
      <Link
        className={`navlink`}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
