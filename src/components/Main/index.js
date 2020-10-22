import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import MainImg from "../../assets/undraw_code_review_l1q9 1.svg";
const Main = () => (
  <div className="main-wrapper">
    <div className="main-content">
      <img src={MainImg} alt="mainimg" />
      <h1>Bem vindo a Opp</h1>
      <p>
        Preencha seu currículo para o seu perfil aparecer para os recrutadores
      </p>
      <Link className="btn" to="/cadastro">
        <button>Começar</button>
      </Link>
    </div>
  </div>
);

export default Main;
