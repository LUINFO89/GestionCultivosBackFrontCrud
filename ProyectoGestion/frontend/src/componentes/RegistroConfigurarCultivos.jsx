import React from "react";
import { useState } from "react";
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function RegistroConfigurarCultivos() {
  //import { useState } from "react";
  //import Axios from 'axios'
  //import Swal from 'sweetalert2'
  //logica del crud
  // parametros que se deben llamar del back 
  //onChange={(e) => setNombre(e.target.value)}
  // agregar el onchange en los input y cambiar lo que desea setear
  // por ultimo limpiar las cajas de las funciones 
  //setNombre("");
  //setApellidos("");
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
        

  const guardar = async (e) => {
    e.preventDefault();
    const CogifCultivo = {
      // se crea la variable y se llaman los campos a guardar como en el back
      // traer todos los campos a guardar en la base de datos
      
        idcultivo,
        nombrecultivo,
        cantidadsemillas,
        areadestinada,
        tiempodecultivo,
        cantidadm3,
        cantidadfertilizante,
        tiempoespera,
        fechasiembra,
        fecharecogida,
    };

    if (idcultivo === "") {// campos que se desean validar
      Swal.fire({
        icon: "error",
        title: "Debe escribir su Id cultivo",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (nombrecultivo === "") { // campos que se desean validar
      Swal.fire({
        icon: "error",
        title: "Debe escribir su nombre cultivo",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const token = sessionStorage.getItem("token");
      // ruta que se trabajo en el back
      const respuesta = await Axios.post("/registrocultivo/crear", CogifCultivo, { //cambiar ruta
        headers: { autorizacion: token },
      });
      const mensaje = respuesta.data.mensaje;
      console.log(mensaje);
      //genera mensaje de creado
      Swal.fire({
        icon: "seccess",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });

      // funcion para limpoar el formulario
      // traer todos los set para borrar
      e.target.reset();
      
      setIdcultivo("")
      setNombrecultivo("")
      setCantidadsemillas("")
      setAreadestinada("")
      setTiempodecultivo("")
      setCantidadm3("")
      setCantidadfertilizante("")
      setTiempoespera("")
      setFechasiembra("")
      setFecharecogida("")
    }
  };

  // fin logica
  return (
    //formulario card

    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7  mx-auto">
          <div className="card">
            <div className="container text-center fa-5x">
              <i class="fas fa-clipboard-check"></i>
            </div>
            <div className="card-header bg-info text-center">
              <h4>Configuración del tipo de cultivo</h4>
            </div>
            <div className="card-body">
              <form onSubmit={guardar}> {/** quitar las comillas para realizar la funcion guardar  */}
                <div className="row">
                  <div className="col-md-6">
                    <label>ID CULTIVO</label>
                    <input type="text" className="form-control required" onChange={(e) => setIdcultivo(e.target.value)} />
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
                    <input type="text" className="form-control required" onChange={(e) => setCantidadsemillas(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label>AREA DESTINADA (ha)</label>
                    <input type="text" className="form-control required" onChange={(e) => setAreadestinada(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label>TIEMPO DE CULTIVO (semanas) </label>
                    <input type="text" className="form-control required" onChange={(e) => setTiempodecultivo(e.target.value)}/>
                  </div>
                  <div className="col-md-6">
                    <label>CANTIDAD M3 AGUA</label>
                    <input type="text" className="form-control required"
                    onChange={(e) => setCantidadm3(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label>CANTIDAD DE FERTILIZANTE (ha) </label>
                    <input type="text" className="form-control required" onChange={(e) => setCantidadfertilizante(e.target.value)} />
                  </div>
                  {/*<div className="col-md-6">
                    <label>KG RECOLECTADOS DEL PRODUCTO (ha) </label>
                    <input type="text" className="form-control required" onChange={(e) => setC(e.target.value)} />
                  </div>*/}
                  <div className="col-md-6">
                    <label>TIEMPO DE ESPERA PROXIMA SIEMBRA</label>
                    <input type="text" className="form-control required" onChange={(e) => setTiempoespera(e.target.value)}/>
                  </div>
                  <div className="col-md-6">
                    <label>FECHA DE SIEMBRA DEL CULTIVO</label>
                    <input type="text" className="form-control required" onChange={(e) => setFechasiembra(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label>FECHA DE RECOGIDA DEL CULTIVO</label>
                    <input type="text" className="form-control required" onChange={(e) => setFecharecogida(e.target.value)}/>
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
  );
}
