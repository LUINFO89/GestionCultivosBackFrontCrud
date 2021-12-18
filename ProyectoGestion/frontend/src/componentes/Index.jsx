import { Container } from "@material-ui/core";
import React from "react";
import homeBanner from "../img/homeBanner.webp";
import { Card, Button } from "react-bootstrap";

const index = () => {
  return (
    <div className="container" align="center" style={{ alignItems: "18rm" }}>
      <h1>Hello 👋 , User Management</h1>
      <hr></hr>
      <hr></hr>
      {/* primera  fila*/}

      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Configuración Cultivos</h5>
              <p class="card-text">
                Configura los tipos de cultivo a cada área, indica para cada uno
                los datos correspondientes para el cultivo.
              </p>
              <Button href="/RegistroConfigurarCultivos">
                <i class="fas fa-clipboard-check"></i> Configurar Cultivos
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

        <hr></hr>
        <h3>Consultas</h3>
        <hr></hr>

        {/*  fila*/}
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Ver configuración de cultivos</h5>
              <p class="card-text">
                Visualizar los tipos de cultivos previamente configurados de mi
                propiedad.
              </p>
              <Button href="/VerConfigurarCultivos">
                <i class="far fa-clipboard"></i>
                Ver Configuración Cultivos
              </Button>{" "}
            </div>
          </div>
        </div>
        {/*  fila*/}

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"> Vista tipos de Cultivo</h5>
              <p class="card-text">
                Consulta los diferentes tipos de cultivo elimina o crea .
              </p>
              <Button href="/VerTipoCultivo">
                <i class="far fa-clipboard"></i>
                Ver Tipos de cultivo
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
