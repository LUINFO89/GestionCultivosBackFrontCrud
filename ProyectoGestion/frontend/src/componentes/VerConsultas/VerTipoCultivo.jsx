import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";

function VerTipoCultivo() {
  // se colocan los parametros de los registros
  const [usuarios, setUsuarios] = useState([]);

  const [idPersona, setidPersona] = useState("");
  const [apellidos, setApellidos] = useState("");

  const [nombre, setNombre] = useState("");
  const [idcultivo, setIdcultivo] = useState("");
  const [descripciondelcultivo, setDescripciondelcultivo] = useState("");

  // se imoprtan la variables del modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // al momento de cargar la pagina debe mostrar todos los campos
  useEffect(() => {
    obtenerDatos();
  }, []);

  // metodo para obtener del back los datos
  const obtenerDatos = async () => {
    //const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/tipocultivo/ver/", {
      headers: { autorizacion: token },
    });

    console.log(respuesta);
    setUsuarios(respuesta.data);
  };

  //metodo para crear modal y actualizar los campos

  const obtenerDatoP = async (idParametro) => {
    setShow(true);
    //const id = idParametro;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/tipocultivo/listarporid/", {
      headers: { autorizacion: token },
    });
    // se traen los set de los datos
    console.log(respuesta.data);
    setidPersona(respuesta.data._id);
    setNombre(respuesta.data.nombre);
    setIdcultivo(respuesta.data.idcultivo);
    setDescripciondelcultivo(respuesta.data.descripciondelcultivo);
  };

  const data = usuarios.map((usuarios) => ({
    id: usuarios._id,
    nombre: usuarios.nombre,
    idcultivo: usuarios.idcultivo,
    descripciondelcultivo: usuarios.descripciondelcultivo,
  }));

  //----------------------------------------actualizar------------------------------

  const actualizar = async (e) => {
    e.preventDefault();
    const id = idPersona;
    const usuario = {
      // se crea la variable y se llaman los campos a guardar como en el back
      nombre,
      apellidos,
    };
    const token = sessionStorage.getItem("token");
    // ruta que se trabajo en el back
    const respuesta = await Axios.put("/usuarios/actualizar/" + id, usuario, {
      headers: { autorizacion: token },
    });

    const mensaje = respuesta.data.mensaje;

    obtenerDatos();

    console.log(mensaje);
    //genera mensaje de creado
    Swal.fire({
      icon: "seccess",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });

    setShow(false);
  };

  //--------------------------------------fin actualizar----------------------------------

  //---------------------------------------INICIO ELIMINAR-----------------------------

  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    // ruta que se trabajo en el back
    const respuesta = await Axios.delete("/tipocultivo/eliminar/" + id, {
      headers: { autorizacion: token },
    });

    const mensaje = respuesta.data.mensaje;

    obtenerDatos();

    console.log(mensaje);
    //genera mensaje de creado
    Swal.fire({
      icon: "seccess",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });

    setShow(false);
  };

  //----------------------------------------FIN ELIMINAR--------------------------------

  return (
    <div className="container">
      <MaterialTable
        title="Ver Tipos de cultivo"
        columns={[

          { title: "NOMBRE DEL CULTIVO", field: "nombre" },
          { title: "DESCRIPCIÓN DEL CULTIVO", field: "descripciondelcultivo" },
        ]}
        data={data}
        options={{
          search: true,
          actionsColumnIndex: -1,
          initialPage: 1,
        }}
        actions={[
          {
            icon: "delete",
            tooltip: "Eliminar",
            onClick: (event, rowData) => eliminar(rowData.id),
          },
          {
            icon: "edit",
            tooltip: "Editar", //activamos en onclic y agregamos el evento editarobtenerDatoP
            onClick: (event, rowData) => obtenerDatoP(rowData.id),
          },
        ]}
      />

      {/** Inicio del modal editar*/}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/** //formulario card*/}
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-7  mx-auto">
                <div className="card">
                  <div className="container text-center fa-5x">
                    <i class="fas fa-chalkboard-teacher"></i>
                  </div>
                  <div className="card-header bg-info text-center">
                    <h4>Registro Gestión Cultivos</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={'guardar'}>
                      <div className="row">
                        <div className="form-group">
                          <label>ID CULTIVO</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setIdcultivo(e.target.value)}
                          />

                          <label>NOMBRE:</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setNombre(e.target.value)}
                          />

                          <label>DESCRIPCIÓN DEL CULTIVO</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) =>
                              setDescripciondelcultivo(e.target.value)
                            }
                          />
                          <br />
                        </div>
                      </div>

                      <button type="submit" class="btn btn-outline-info">
                        <span class="fa fa-save"></span> Guardar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/** //formulario card*/}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={actualizar}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/** fin del modal */}
    </div>
  );
}

export default VerTipoCultivo;
