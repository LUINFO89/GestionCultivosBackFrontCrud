import React from "react";
import { useState } from "react";
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function RegistroGestionCultivos() {
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
  const [idpredio, setIdpredio] = useState("");
  const [idpropietario, setIdpropietario] = useState("");
  const [cantidadhectareas, setCantidadhectareas] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [latitudylongitud, setLatitudylongitud] = useState("");
  

        

  const guardar = async (e) => {
    e.preventDefault();
    const CogifCultivo = {
      // se crea la variable y se llaman los campos a guardar como en el back
      // traer todos los campos a guardar en la base de datos
      
      idpredio,
      idpropietario,
      cantidadhectareas,
      ubicacion,
      latitudylongitud,
    };

    if (idpredio === "") {// campos que se desean validar
      Swal.fire({
        icon: "error",
        title: "Debe escribir su Id",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (idpropietario === "") { // campos que se desean validar
      Swal.fire({
        icon: "error",
        title: "Debe escribir id propietario",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const token = sessionStorage.getItem("token");
      // ruta que se trabajo en el back
      const respuesta = await Axios.post("/gestioncultivo/crear", CogifCultivo, { //cambiar ruta
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
      
      setIdpredio("")
      setIdpropietario("")
      setCantidadhectareas("")
      setUbicacion("")
      setLatitudylongitud("")
     
    }
  };

  // fin logica



  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7  mx-auto">
          <div className="card">
            <div className="container text-center fa-5x">
              <i  class="fas fa-user-cog"></i>
            </div>
            <div className="card-header bg-info text-center">
              <h4>Gestión Predios Cultivo</h4>
            </div>
            <div className="card-body">
              <form onSubmit={guardar}>
                <div className="row">
                  <div className="form-group">
                    <label>ID PREDIO</label>
                    <input type="text" className="form-control required"
                    onChange={(e) => setIdpredio(e.target.value)} />
                    <label>ID PROPIETARIO</label>
                    <input type="text" className="form-control required" 
                    onChange={(e) => setIdpropietario(e.target.value)}/>
                    <label>CANTIDAD DE HECTAREAS</label>
                    <input type="text" className="form-control required" 
                    onChange={(e) => setCantidadhectareas(e.target.value)}/>
                    <label>UBICACIÓN</label>
                    <input type="text" className="form-control required" 
                    onChange={(e) => setUbicacion(e.target.value)}/>
                    <label>LATITUD Y LONGITUD</label>
                    <input type="text" className="form-control required" 
                    onChange={(e) => setLatitudylongitud(e.target.value)}/>
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
  );
}
