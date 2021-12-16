import React from "react";

export default function RegistroGestionPredios() {
  return (
    //formulario card

    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7  mx-auto">
          <div className="card">
            <div className="container text-center fa-5x">
            <i class="fas fa-tasks"></i>
            </div>
            <div className="card-header bg-info text-center">
              <h4>Registro Gestión Predios</h4>
            </div>
            <div className="card-body">
              <form onSubmit={"guardar"}>
                <div className="row">
                  <div className="form-group">
                    <label>ID PREDIO</label>
                    <input type="text" className="form-control required" />
                    <label>ID PROPIETARIO</label>
                    <input type="text" className="form-control required" />
                    <label>CANTIDAD DE HECTAREAS</label>
                    <input type="text" className="form-control required" />
                    <label>UBICACIÓN</label>
                    <input type="text" className="form-control required" />
                    <label>LATITUD Y LONGITUD</label>
                    <input type="text" className="form-control required" />
                    <label>USUARIO GESTIÓN</label>
                    <input type="text" className="form-control required" />
                    <br/>
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
