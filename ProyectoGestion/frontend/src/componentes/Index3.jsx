import { Container } from "@material-ui/core";
import React from "react";
import homeBanner from "../img/homeBanner.webp";
import { Card, Button } from "react-bootstrap";

const index2 = () => {
  return (
    <div className="container" align="center" style={{ alignItems: "18rm" }}>
      <h1>Hello 👋 , User Configuration</h1>
      <hr></hr>
      <hr></hr>
      {/* primera  fila*/}
      <div class="row">
        {/* tercera  fila*/}
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Gestión predios</h5>
              <p class="card-text">
                Registrar predios indicando el área del mismo, su ubicación
                (latitud y longitud), y un código único de identificación.
              </p>
              <Button href="/RegistroGestionCultivos">
                <i class="fas fa-user-cog"></i> Gestión Cultivos
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
                Configurar los parámetros de valor metro cúbico de agua, valor
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
                descripción corta.
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
              <h5 class="card-title">Gestión Predios Cultivo</h5>
              <p class="card-text">
                Registrar predios indicando el área del mismo, su ubicación
                (latitud y longitud), y un código único de identificación.
              </p>
              <Button href="/RegistroGestionPredios">
                <i class="far fa-clipboard"></i>
                Gestión Predio
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
              <h5 class="card-title">Gestión Predios</h5>
              <p class="card-text">
                Crea Edita o elimina los diferentes predios creados .
              </p>
              <Button href="/VerGestionPredios">
                <i class="far fa-clipboard"></i>
                Ver Gestión Predios
              </Button>{" "}
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Visualización Parametros Cultivo</h5>
              <p class="card-text">
                Consulta edita y elimina los diferentes paramentros para la
                gestión de un cultivo .
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
              <h5 class="card-title">Gesrtión Predios del cultivo</h5>
              <p class="card-text">
                Consulta los diferentes predios del cultivo y su usuario de
                gestion .
              </p>
              <Button href="/VerGestionPredios">
                <i class="far fa-clipboard"></i>
                Ver Gesrtión Predios
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
