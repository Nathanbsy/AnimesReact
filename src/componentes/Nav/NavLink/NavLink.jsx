import { Link, useLocation } from "react-router";

function NavLink({ to, children }) {
    //Declarando a localização da página para a marcação do link
    const localizacao = useLocation();

    return (
        //Usando o link do router para a atualização dinâmica da página
        <Link className={`navlink ${localizacao.pathname === to ? "linkativo" : ""}`} to={to}>{children}</Link>

    );
}

export default NavLink;