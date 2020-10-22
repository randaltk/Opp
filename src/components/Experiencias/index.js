import React from "react";
import { Link } from "react-router-dom";
import "./stylesexp.scss";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
function FormExp() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <div classname="form-content">
          <form className="form" action="/action_page.php">
            <h1 className="title">Vida Academica</h1>
            <h2>Formação</h2>
            <div className="flex">
              <div className="item01">
                <label for="fname">Nome:</label>
                <input type="text" id="fname" name="fname" value="" />
                <label for="lname">Telefone:</label>
                <input type="text" id="lname" name="lname" value="" />
                <label for="lname">rg:</label>
                <input type="text" id="lname" name="lname" value="" />
              </div>
              <div className="item02">
                <label for="fname">CPF:</label>
                <input type="text" id="fname" name="fname" value="" />
                <label for="lname">Email:</label>
                <input type="text" id="lname" name="lname" value="" />
                <label for="lname">Data Emissão:</label>
                <input type="text" id="lname" name="lname" value="" />
              </div>
            </div>

            <h2>Última Experiência</h2>
            <div className="flex">
              <div className="item01">
                <label for="fname">Numero:</label>
                <input type="text" id="fname" name="fname" value="" />
                <label for="lname">Data de nascimento:</label>
                <input type="text" id="lname" name="lname" value="" />
              </div>
              <div className="item02">
                <label for="fname">PIS/PASEP:</label>
                <input type="text" id="fname" name="fname" value="" />
              </div>
            </div>

            <h2>Penúltima Experiência</h2>
            <div className="flex">
              <div className="item01">
                <label for="fname">CEP:</label>
                <input type="text" id="fname" name="fname" value="" />
                <label for="lname">Numero:</label>
                <input type="text" id="lname" name="lname" value="" />
                <label for="lname">Cidade:</label>
                <input type="text" id="lname" name="lname" value="" />
                <label for="lname">País:</label>
                <input type="text" id="lname" name="lname" value="" />
              </div>
              <div className="item02">
                <label for="fname">Logradouro:</label>
                <input type="text" id="fname" name="fname" value="" />
                <label for="lname">Complemento:</label>
                <input type="text" id="lname" name="lname" value="" />
                <label for="lname">Estado:</label>
                <input type="text" id="lname" name="lname" value="" />

                <div className="linkwrapper">
                  <Link to="/experiencias">
                    <div className="circle">
                      <BsArrowRight className="icon-right" size={30} />
                    </div>
                  </Link>
                  <Link to="/cadastro">
                    <div className="circle2">
                      <BsArrowLeft className="icon-left" size={30} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormExp;
