import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light ">
        <Link className="navbar-brand" to="/">
          Inicio
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end de"
          id="navbarNavAltMarkup"
        >
          {auth().currentUser ? (
            <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/chat">
                Profile
              </Link>
              <button
                className="btn btn-primary mr-3"
                onClick={() => auth().signOut()}
              >
                Salir
              </button>
            </div>
          ) : (
            <div className="navbar-nav">
              <Link className="nav-item_nav-link_mr-3" to="/login">
                Iniciar sesión
              </Link>
              <Link className="nav-item_nav-link_mr-3" to="/signup">
                Registrarse
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
