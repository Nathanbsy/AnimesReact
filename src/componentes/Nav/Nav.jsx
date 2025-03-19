import NavLink from "./NavLink/NavLink.jsx";
import "./Nav.css";
import BarraPesquisa from "../BarraPesquisa/BarraPesquisa.jsx";

function Nav() {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/temporada">Temporada</NavLink>
                <NavLink to="/minhalista">Minha Lista</NavLink>
            </nav>
            <BarraPesquisa/>
        </header>
    );
}

export default Nav;