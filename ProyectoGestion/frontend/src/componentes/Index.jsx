import { Container } from "@material-ui/core";
import React from "react";
import homeBanner from '../img/homeBanner.webp';
import { Card,Button } from "react-bootstrap";



const index = () => {
  return (
    <div className="container" align="center" style={{ alignItems:"18rm" }}>
      <h1>Bienvenidos a cultivos la planicie Usuario Gestión</h1>
      <img src={homeBanner} alt="logo" width={1000} />
      <hr></hr>
                    <Button  href="/RegistroGestionarUsuarios">
                    <i class="fas fa-user-circle"></i>  Gestionar Usuarios
                    </Button>{' '}
                    <Button href="/RegistroGestionPredios">
                    
                    <i class="fas fa-clipboard-check"></i> Configurar Cultivos
                    </Button>{' '}
                    <Button href="/RegistroTipoCultivo">
                    <i class="fas fa-chalkboard-teacher"></i> Tipos de Cultivos
                    </Button>{' '}


                      <hr></hr>


                    <Button  href="/VerGestionarUsuarios">
                    <i class="far fa-clipboard"></i>
                      Ver Usuarios
                    </Button>{' '}
                    
                    <Button href="/VerConfigurarCultivos">
                    <i class="far fa-clipboard"></i>
                      Ver Configuración Cultivos
                    </Button>{' '}
                    <Button href="/VerTipoCultivo">
                    <i class="far fa-clipboard"></i>
                      Ver Tipos de Cultivo
                    </Button>{' '}

                  
                   
    </div>
  );
};

export default index;
