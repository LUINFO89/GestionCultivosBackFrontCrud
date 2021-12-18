import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";

function VerConfigurarCultivos() {
  // se colocan los parametros de los registros

  const [idcultivo, setIdcultivo] = useState("");
  const [nombrecultivo, setNombrecultivo] = useState("");
  const [cantidadsemillas, setCantidadsemillas] = useState("");
  const [areadestinada, setAreadestinada] = useState("");
  const [tiempodecultivo, setTiempodecultivo] = useState("");
  const [cantidadm3, setCantidadm3] = useState("");
  const [cantidadfertilizante, setCantidadfertilizante] = useState("");
  const [tiempoespera, setTiempoespera] = useState("");
  const [fechasiembra, setFechasiembra] = useState("");
  const [fecharecogida, setFecharecogida] = useState("");
  const [cultivo, setCultivo] = useState([]);

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
    const respuesta = await Axios.get("/registrocultivo/ver", {
      headers: { autorizacion: token },
    });

    console.log(respuesta);
    setCultivo(respuesta.data);
  };

  //metodo para crear modal y actualizar los campos

  const obtenerDatoP = async (idParametro) => {
    setShow(true);
    //const id = idParametro;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/registrocultivo/listarporid/", {
      headers: { autorizacion: token },
    });
    // se traen los set de los datos
    console.log(respuesta.data);

    setIdcultivo(respuesta.data._id);
    setNombrecultivo(respuesta.data.nombrecultivo);
    setCantidadsemillas(respuesta.data.cantidadsemillas);
    setAreadestinada(respuesta.data.areadestinadad);
    setTiempodecultivo(respuesta.data.tiempodecultivo);
    setCantidadm3(respuesta.data.cantidadm3);
    setCantidadfertilizante(respuesta.data.cantidadfertilizante);
    setTiempoespera(respuesta.data.tiempoespera);
    setFechasiembra(respuesta.data.fechasiembra);
    setFecharecogida(respuesta.data.fecharecogida);
  };

  const data = cultivo.map((cultivo) => ({
    idcultivo: cultivo._id,
    nombrecultivo: cultivo.nombrecultivo,
    cantidadsemillas: cultivo.cantidadsemillas,
    areadestinada: cultivo.areadestinada,
    tiempodecultivo: cultivo.tiempodecultivo,
    cantidadm3: cultivo.cantidadm3,
    cantidadfertilizante: cultivo.cantidadfertilizante,
    tiempoespera: cultivo.tiempoespera,
    fechasiembra: cultivo.fechasiembra,
    fecharecogida: cultivo.fecharecogida,
  }));


//---------------------------------------INICIO ELIMINAR-----------------------------

const eliminar  = async(id) =>{
  
  const token = sessionStorage.getItem('token')
  // ruta que se trabajo en el back
  const respuesta = await Axios.delete('/registrocultivo/eliminar/' + id , {
    headers:{'autorizacion':token}

  })

  const mensaje = respuesta.data.mensaje

  obtenerDatos()
  
  console.log(mensaje)
  //genera mensaje de creado
  Swal.fire({
    icon:"seccess",
    title:mensaje,
    showConfirmButton:false,
    timer:1500
  })

  setShow(false)
  

}


//----------------------------------------FIN ELIMINAR--------------------------------

  return (
    <div className="container">
      <MaterialTable
        title="Ver Configurar Cultivos"
        columns={[
          { title: "ID", field: "idcultivo" },
          { title: "Nombre Cultivo", field: "nombrecultivo" },
          { title: "Cantidad semillas", field: "cantidadsemillas" },
          { title: "areadestinada", field: "areadestinada" },
          { title: "tiempodecultivo", field: "tiempodecultivo" },
          { title: "cantidadm3", field: "cantidadm3" },
          { title: "cantidadfertilizante", field: "cantidadfertilizante" },
          { title: "tiempoespera", field: "tiempoespera" },
          { title: "fechasiembra", field: "fechasiembra" },
          { title: "fecharecogida", field: "fecharecogida" },
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
       
          <div className="container mt-9">
            <div className="row">
              <div className="col-md-15  mx-auto">
                <div className="card">
                  <div className="container text-center fa-5x">
                    <i class="fas fa-clipboard-check"></i>
                  </div>
                  <div className="card-header bg-info text-center">
                    <h4>Configuración del tipo de cultivo</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={'guardar'}>
                      {" "}
                      {/** quitar las comillas para realizar la funcion guardar  */}
                      <div className="row">
                        <div className="col-md-6">
                          <label>ID CULTIVO</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setIdcultivo(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>NOMBRE CULTIVO</label>
                          <input
                            type="text"
                            placeholder="clavel o clavel estandar"
                            className="form-control required"
                            onChange={(e) => setNombrecultivo(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>CANTIDAD DE SEMILLAS </label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) =>
                              setCantidadsemillas(e.target.value)
                            }
                          />
                        </div>
                        <div className="col-md-6">
                          <label>AREA DESTINADA (ha)</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setAreadestinada(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>TIEMPO DE CULTIVO (semanas) </label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setTiempodecultivo(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>CANTIDAD M3 AGUA</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setCantidadm3(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>CANTIDAD DE FERTILIZANTE (ha) </label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) =>
                              setCantidadfertilizante(e.target.value)
                            }
                          />
                        </div>
                        {/*<div className="col-md-6">
                    <label>KG RECOLECTADOS DEL PRODUCTO (ha) </label>
                    <input type="text" className="form-control required" onChange={(e) => setC(e.target.value)} />
                  </div>*/}
                        <div className="col-md-6">
                          <label>TIEMPO DE ESPERA PROXIMA SIEMBRA</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setTiempoespera(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>FECHA DE SIEMBRA DEL CULTIVO</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setFechasiembra(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>FECHA DE RECOGIDA DEL CULTIVO</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setFecharecogida(e.target.value)}
                          />
                        </div>
                      </div>
                      <br />
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/** fin del modal */}
    </div>
  );
}

export default VerConfigurarCultivos;
