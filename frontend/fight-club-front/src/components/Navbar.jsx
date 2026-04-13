import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          FIGHT <span className="highlight">CLUB</span>
        </Link>
        <ul>
          <li>
            <Link to="/">Peleadores</Link>
          </li>
          <li>
            <Link to="/crear">Crear Peleador</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
