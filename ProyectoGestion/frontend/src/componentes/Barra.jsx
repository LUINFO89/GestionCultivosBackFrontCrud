import React, { useState,useEffect } from "react";
import {
  Button,
  Container,
  Offcanvas,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

//rfc crea todo el inicio

export default function Barra() {
  const [show, setShow] = useState(true)
  const [opcionRegistro, setOpcionRegistro] = useState(true)
  const [menu,setMenu] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      //si el navegador tiene el token 
      setMenu(true)
      setShow(false)
      setOpcionRegistro(true)
      // en el momento que inicie sesion se camian los estados

    }
  }, []);

  const salir=()=>{
    sessionStorage.clear()
    window.location.href="/"
  }


  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark" expand={show} >
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand href="/">Cultivos La Planicie</Navbar.Brand>
            <Navbar.Brand href="#"> </Navbar.Brand>
            <Navbar.Brand href="#"> </Navbar.Brand>

            <Navbar.Brand hidden={show} href="#">
            <i class="fas fa-user-tie"></i>  Bienvenido : {sessionStorage.getItem('nombre')}
            </Navbar.Brand>
            <Navbar.Brand  hidden={show} href="#" onClick={()=>salir()} to="/"><i class="fas fa-user-times"></i> Cerrar sesión </Navbar.Brand>
            

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Cultivos la Planicie
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/index">Home</Nav.Link>
                  {/* Administrador  */}
                  <NavDropdown
                    title="Registros de Usuario Administrador"
                    id="offcanvasNavbarDropdown"
                  >
                    <NavDropdown.Item href="/RegistroGestionarUsuarios">
                    <i class="fas fa-user-circle"></i>  Gestionar Usuarios
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/RegistroGestionPredios">
                    <i class="fas fa-tasks"></i> Gestión Predios
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/RegistroGestionCultivos">
                    <i class="fas fa-user-cog"></i> Gestión Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/RegistroParametrosCultivos">
                    <i class="fas fa-tractor"></i> Parametros Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/RegistroConfigurarCultivos">
                    <i class="fas fa-clipboard-check"></i> Configurar Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/RegistroTipoCultivo">
                    <i class="fas fa-chalkboard-teacher"></i> Tipos de Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  {/* Consulta Administrador  */}
                  <NavDropdown
                    title="Consultas de Usuario Administrador"
                    id="offcanvasNavbarDropdown"
                  >
                    <NavDropdown.Item href="/VerGestionarUsuarios">
                    <i class="far fa-clipboard"></i>
                      Ver Usuarios
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerGestionPredios">
                    <i class="far fa-clipboard"></i>
                      Ver Predios
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerGestionCultivos">
                    <i class="far fa-clipboard"></i>
                      Ver Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerParametrosCultivos">
                    <i class="far fa-clipboard"></i>
                      Ver Parametros Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerConfigurarCultivos">
                    <i class="far fa-clipboard"></i>
                      Ver Configuración Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerTipoCultivo">
                    <i class="far fa-clipboard"></i>
                      Ver Tipos de Cultivo
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <hr></hr>

                  {/* Configuración  */}
                  <NavDropdown
                    title=" Registros de Usuario Configuración"
                    id="offcanvasNavbarDropdown"
                  >
                    <NavDropdown.Item href="/RegistroGestionarUsuarios">
                      Mi perfil
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/RegistroGestionPredios">
                      Gestión Predios
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/RegistroTipoCultivo">
                      Tipos de Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/RegistroParametrosCultivos">
                      Parametros Cultivos
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* Vistas de configuracion  */}

                  <NavDropdown
                    title="Consultas de Usuario Configuración"
                    id="offcanvasNavbarDropdown"
                  >
                    <NavDropdown.Item href="/VerGestionarUsuarios">
                    <i class="far fa-clipboard"></i>
                      Ver Usuarios
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerGestionPredios">
                    <i class="far fa-clipboard"></i>
                      Ver Predios
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerGestionCultivos">
                    <i class="far fa-clipboard"></i>
                      Ver Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerParametrosCultivos">
                    <i class="far fa-clipboard"></i>
                      Ver Parametros Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerTipoCultivo">
                    <i class="far fa-clipboard"></i>
                      Ver Tipos de Cultivo
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>

                  <hr></hr>
                  {/* Gestion  */}
                  <NavDropdown
                    title="Registros Usuario Gestión"
                    id="offcanvasNavbarDropdown"
                  >
                    <NavDropdown.Item href="/RegistroGestionarUsuarios">
                      Mi perfil
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/RegistroConfigurarCultivos">
                      Configurar Cultivos
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* Vistas Gestion  */}
                  <NavDropdown
                    title="Consultas de Usuario Administrador"
                    id="offcanvasNavbarDropdown"
                  >
                    <NavDropdown.Item href="/VerGestionarUsuarios">
                    <i class="far fa-clipboard"></i>
                      Ver Usuarios
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerConfigurarCultivos">
                    <i class="far fa-clipboard"></i>
                      Ver Configuración Cultivos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/VerTipoCultivo">
                    <i class="far fa-clipboard"></i>
                      Ver Tipos de Cultivo
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>

                  {/* FIN  Gestiones  */}
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
