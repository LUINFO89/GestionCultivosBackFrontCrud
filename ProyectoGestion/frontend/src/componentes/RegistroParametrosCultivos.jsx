import React from "react";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function RegistroParametrosCultivos() {
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
  const [idparametrocultivo, setIdparametrocultivo] = useState("");
  const [idcultivo, setIdcultivo] = useState("");
  const [valorsemilla, setValorsemilla] = useState("");
  const [valorm3agua, setValorm3agua] = useState("");
  const [valorkgfertilizante, setValorkgfertilizante] = useState("");

  const guardar = async (e) => {
    e.preventDefault();
    const CogifCultivo = {
      // se crea la variable y se llaman los campos a guardar como en el back
      // traer todos los campos a guardar en la base de datos

      idparametrocultivo,
      idcultivo,
      valorsemilla,
      valorm3agua,
      valorkgfertilizante,
    };

    if (idcultivo === "") {
      // campos que se desean validar
      Swal.fire({
        icon: "error",
        title: "Debe escribir su Id",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const token = sessionStorage.getItem("token");
      // ruta que se trabajo en el back
      const respuesta = await Axios.post(
        "/parametroscultivo/crear",
        CogifCultivo,
        {
          //cambiar ruta
          headers: { autorizacion: token },
        }
      );
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

      setIdparametrocultivo("");
      setIdcultivo("");
      setValorsemilla("");
      setValorm3agua("");
      setValorkgfertilizante("");
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
              <i class="fas fa-tractor"></i>
            </div>
            <div className="card-header bg-info text-center">
              <h4>Registro Parametros Cultivos</h4>
            </div>
            <div className="card-body">
              <form onSubmit={guardar}>
                <div className="row">
                  <div className="form-group">
                    <label>ID PARAMETRO CULTIVO</label>
                    <input
                      type="text"
                      className="form-control required"
                      onChange={(e) => setIdparametrocultivo(e.target.value)}
                    />

                    <label>ID CULTIVO</label>
                    <input
                      type="text"
                      className="form-control required"
                      onChange={(e) => setIdcultivo(e.target.value)}
                    />
                    <label>VALOR SEMILLA</label>
                    <input
                      type="text"
                      className="form-control required"
                      onChange={(e) => setValorsemilla(e.target.value)}
                    />
                    <label>VALOR M3 AGUA</label>
                    <input
                      type="text"
                      className="form-control required"
                      onChange={(e) => setValorm3agua(e.target.value)}
                    />
                    <label>VALOR KG FERTILIZANTE</label>
                    <input
                      type="text"
                      className="form-control required"
                      onChange={(e) => setValorkgfertilizante(e.target.value)}
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
  );
}
