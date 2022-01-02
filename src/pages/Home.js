import React, { Component } from "react";
import Header from "../components/Header";

import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <section>
          <div className="jumbotron__jumbotron-fluid-py-5">
            <div className="container__text-center-py-5">
              <h1 className="display-4">Bienvenido a Chatty</h1>
              <p className="lead">Un gran lugar para compartir con amigos.</p>
              <div className="mt-4">
                <Link className="btn__btn-primary-px-5-mr-3" to="/signup">
                  Crear nueva cuenta
                </Link>
                <Link className="btn px-5" to="/login">
                  Iniciar sesion
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
