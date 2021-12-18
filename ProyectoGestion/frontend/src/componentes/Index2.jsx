import { Container } from "@material-ui/core";
import React from "react";
import { Button } from "react-bootstrap";

const index2 = () => {
  return (
    <div className="container" align="center" style={{ alignItems: "18rm" }}>
      <h1>Hello 👋 , User Administrator</h1>
      <hr></hr>
      <hr></hr>
      {/* primera  fila*/}
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Usuarios</h5>
              <p class="card-text">
                Recuerda actualizar tus datos personales para una mejor
                comunicación con el adminitrador.
              </p>
              <Button href="/RegistroGestionarUsuarios">
                <i class="fas fa-user-circle"></i> Gestión de Usuarios
              </Button>{" "}
            </div>
          </div>
        </div>
        {/* segunda  fila*/}
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
                Ver Gestión Predios Cultivo
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
              <h5 class="card-title">Ver Usuarios</h5>
              <p class="card-text">
                Consulta los diferentes usuarios del sistema actualiza los datos
                y crea los nuevos usuarios.
              </p>
              <Button href="/VerGestionarUsuarios">
                <i class="far fa-clipboard"></i>
                Ver Usuarios
              </Button>{" "}
            </div>
          </div>
        </div>
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
                Consulta edita y elimina los diferentes paramentros para la gestión de un cultivo .
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
                Ver tipos de Cultivo
              </Button>{" "}
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Gesrtión Predios del cultivo</h5>
              <p class="card-text">
                Consulta los diferentes predios del cultivo y su usuario de gestion .
              </p>
              <Button href="/VerGestionPredios">
                <i class="far fa-clipboard"></i>
                Ver Gesrtión Predios del cultivo
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
