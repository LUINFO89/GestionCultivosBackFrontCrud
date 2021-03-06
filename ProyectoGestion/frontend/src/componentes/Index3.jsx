import { Container } from "@material-ui/core";
import React from "react";
import homeBanner from "../img/homeBanner.webp";
import { Card, Button } from "react-bootstrap";

const index2 = () => {
  return (
    <div className="container" align="center" style={{ alignItems: "18rm" }}>
      <h1>Hello 馃憢 , User Configuration</h1>
      <hr></hr>
      <hr></hr>
      {/* primera  fila*/}
      <div class="row">
        {/* tercera  fila*/}
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Gesti贸n predios</h5>
              <p class="card-text">
                Registrar predios indicando el 谩rea del mismo, su ubicaci贸n
                (latitud y longitud), y un c贸digo 煤nico de identificaci贸n.
              </p>
              <Button href="/RegistroGestionCultivos">
                <i class="fas fa-user-cog"></i> Gesti贸n Cultivos
              </Button>{" "}
            </div>
          </div>
        </div>
        {/* tercera  fila*/}
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Parametros Cultivos</h5>
              <p class="card-text">
                Configurar los par谩metros de valor metro c煤bico de agua, valor
                de cada semilla y valor del kilogramo de fertilizante.
              </p>
              <Button href="/RegistroParametrosCultivos">
                <i class="fas fa-tractor"></i> Parametros Cultivos
              </Button>{" "}
            </div>
          </div>
        </div>
        {/* tercera  fila*/}
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Tipos de cultivo</h5>
              <p class="card-text">
                Crear los tipos de cultivos para la gestion adminsitrativo ,
                asigna el codigo del cultivo, el nombre del cultivo y una
                descripci贸n corta.
              </p>
              <Button href="/RegistroTipoCultivo">
                <i class="fas fa-chalkboard-teacher"></i> Tipos de Cultivos
              </Button>{" "}
            </div>
          </div>
        </div>
        {/* tercera  fila*/}
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Gesti贸n Predios Cultivo</h5>
              <p class="card-text">
                Registrar predios indicando el 谩rea del mismo, su ubicaci贸n
                (latitud y longitud), y un c贸digo 煤nico de identificaci贸n.
              </p>
              <Button href="/RegistroGestionPredios">
                <i class="far fa-clipboard"></i>
                Gesti贸n Predio
              </Button>{" "}
            </div>
          </div>
        </div>

        <hr></hr>
        <h3>Consultas</h3>
        <hr></hr>

        {/*  fila*/}

        {/*  fila*/}
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Gesti贸n Predios</h5>
              <p class="card-text">
                Crea Edita o elimina los diferentes predios creados .
              </p>
              <Button href="/VerGestionPredios">
                <i class="far fa-clipboard"></i>
                Ver Gesti贸n Predios
              </Button>{" "}
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Visualizaci贸n Parametros Cultivo</h5>
              <p class="card-text">
                Consulta edita y elimina los diferentes paramentros para la
                gesti贸n de un cultivo .
              </p>
              <Button href="/VerParametrosCultivos">
                <i class="far fa-clipboard"></i>
                Ver Parametros Cultivo
              </Button>{" "}
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"> Vista tipos de Cultivo</h5>
              <p class="card-text">
                Consulta los diferentes tipos de cultivo elimina o crea .
              </p>
              <Button href="/VerTipoCultivo">
                <i class="far fa-clipboard"></i>
                Vista tipos de Cultivo{" "}
              </Button>{" "}
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Gesrti贸n Predios del cultivo</h5>
              <p class="card-text">
                Consulta los diferentes predios del cultivo y su usuario de
                gestion .
              </p>
              <Button href="/VerGestionPredios">
                <i class="far fa-clipboard"></i>
                Ver Gesrti贸n Predios
              </Button>{" "}
            </div>
          </div>
        </div>
        {/* cuarta  fila*/}
      </div>
    </div>
  );
};

export default index2;
