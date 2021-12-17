import React from "react";
import { useState } from "react";
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function RegistroGestionarUsuarios() {
 
  const[nombre,setNombre]=useState('')
  const[apellidos,setApellidos]=useState('')

  const guardar = async(e) =>{
    e.preventDefault()
    const usuario = {// se crea la variable y se llaman los campos a guardar como en el back
      nombre,
      apellidos

    }

    if (nombre === ""){

      Swal.fire({
        icon:"error",
        title:"Debe escribir su nombre",
        showConfirmButton:false,
        timer:1500
      })
    }
    if (apellidos === ""){

      Swal.fire({
        icon:"error",
        title:"Debe escribir su apellido",
        showConfirmButton:false,
        timer:1500
      })
    }
    else {
      const token = sessionStorage.getItem('token')
      // ruta que se trabajo en el back
      const respuesta = await Axios.post('/usuarios/crear',usuario,{
        headers:{'autorizacion':token}
      })
      const mensaje = respuesta.data.mensaje
      console.log(mensaje)
      //genera mensaje de creado
      Swal.fire({
        icon:"seccess",
        title:mensaje,
        showConfirmButton:false,
        timer:1500
      })

      // funcion para limpoar el formulario
      e.target.reset()
      setNombre("")
      setApellidos("")


    }



  }


  return (
    //formulario card

    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7  mx-auto">
          <div className="card">
            <div className="container text-center fa-5x">
              <i class="fas fa-user-circle"></i>
            </div>
            <div className="card-header bg-info text-center">
              <h4>Perfil de Usuarios</h4>
            </div>
            <div className="card-body">
              <form onSubmit={guardar}>
                <div className="row">
                  <div className="col-md-6">
                    <label>Nombre</label>
                    <input type="text" className="form-control required" onChange={(e) => setNombre(e.target.value)}
 />
                  </div>
                  <div className="col-md-6">
                    <label>Apellidos</label>
                    <input type="text" className="form-control required" onChange={(e) => setApellidos(e.target.value)}
 />
                  </div>
                  {/*<div className="col-md-6">
                    <label>Cedula</label>
                    <input type="text" className="form-control required" />
                  </div>
                  <div className="col-md-6">
                    <label>Telefono</label>
                    <input type="text" className="form-control required" />
                  </div>
                  */}
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
