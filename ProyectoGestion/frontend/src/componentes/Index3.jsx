import { Container } from "@material-ui/core";
import React from "react";
import homeBanner from "../img/homeBanner.webp";
import { Card,Button } from "react-bootstrap";

const index2 = () => {
  return (
    <div className="container" align="center" style={{ alignItems:"18rm" }} >
      <h1>Bienvenidos a cultivos la planicie Usuario Configuración </h1>
      <img src={homeBanner} alt="logo" width={1000} />

                    <Button  href="/RegistroGestionarUsuarios">
                    <i class="fas fa-user-circle"></i>  Gestionar Usuarios
                    </Button>{' '}
                    <Button href="/RegistroGestionPredios">
                    <i class="fas fa-tasks"></i> Gestión Predios
                    </Button>{' '}
                    <Button href="/RegistroGestionCultivos">
                    <i class="fas fa-user-cog"></i> Gestión Cultivos
                    </Button>{' '}
                    <Button href="/RegistroParametrosCultivos">
                    <i class="fas fa-tractor"></i> Parametros Cultivos
                    </Button>{' '}
                   


                      <hr></hr>


                    <Button  href="/VerGestionarUsuarios">
                    <i class="far fa-clipboard"></i>
                      Ver Usuarios
                    </Button>{' '}
                    <Button href="/VerGestionPredios">
                    <i class="far fa-clipboard"></i>
                      Ver Predios
                    </Button>{' '}
                    <Button href="/VerGestionCultivos">
                    <i class="far fa-clipboard"></i>
                      Ver Cultivos
                    </Button>{' '}
                    <Button href="/VerParametrosCultivos">
                    <i class="far fa-clipboard"></i>
                      Ver Parametros Cultivos
                    </Button>{' '}
                   

                  
                   
    </div>
  );
};

export default index2;
