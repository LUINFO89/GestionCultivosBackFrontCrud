import React from "react";
import { useState } from "react";
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function RegistroTipoCultivo() {

  const [idcultivo, setIdcultivo] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripciondelcultivo, setDescripciondelcultivo] = useState("");
  
  

        

  const guardar = async (e) => {
    e.preventDefault();
    const CogifCultivo = {
      // se crea la variable y se llaman los campos a guardar como en el back
      // traer todos los campos a guardar en la base de datos
      idcultivo,
      nombre,
      descripciondelcultivo
    };
    
    if (idcultivo === "") {// campos que se desean validar
      Swal.fire({
        icon: "error",
        title: "Debe escribir su Id",
        showConfirmButton: false,
        timer: 1500,
      });
    }
     else {
      const token = sessionStorage.getItem("token");
      // ruta que se trabajo en el back
      const respuesta = await Axios.post("/tipocultivo/crear", CogifCultivo, { //cambiar ruta
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
      setNombre("")
      setDescripciondelcultivo("")
    
     
    }
  };

  // fin logica


    return (
        <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
              <i class="fas fa-chalkboard-teacher"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registro Tipos de  Cultivos</h4>
              </div>
              <div className="card-body">
                <form onSubmit={guardar}>
                  <div className="row">
                    <div className="form-group">
                      <label>ID CULTIVO</label>
                      <input type="text" className="form-control required"
                      onChange={(e) => setIdcultivo(e.target.value)} />
                                      
                      <label>NOMBRE:</label>
                      <input type="text" className="form-control required" 
                      onChange={(e) => setNombre(e.target.value)} />
                                            
                      <label>DESCRIPCIÓN DEL CULTIVO</label>
                      <input type="text" className="form-control required"                       
                      onChange={(e) => setDescripciondelcultivo(e.target.value)} />
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
    )
}
