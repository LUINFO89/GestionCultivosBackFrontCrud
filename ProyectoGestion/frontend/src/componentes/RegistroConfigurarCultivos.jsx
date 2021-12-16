import React from 'react'

export default function RegistroConfigurarCultivos() {
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
            <form onSubmit={"guardar"}>
              <div className="row">
                <div className="col-md-6">
                  <label>ID CULTIVO</label>
                  <input type="text" className="form-control required" />
                </div>
                <div className="col-md-6">
                  <label>NOMBRE CULTIVO</label>
                  <input type="text"   placeholder='clavel o clavel estandar'className="form-control required" />
                </div>
                <div className="col-md-6">
                  <label>CANTIDAD DE SEMILLAS </label>
                  <input type="text" className="form-control required" />
                </div>
                <div className="col-md-6">
                  <label>AREA DESTINADA (ha)</label>
                  <input type="text" className="form-control required" />
                </div>
                <div className="col-md-6">
                  <label>TIEMPO DE CULTIVO (semanas) </label>
                  <input type="text" className="form-control required" />
                </div>
                <div className="col-md-6">
                  <label>CANTIDAD M3 AGUA</label>
                  <input type="text" className="form-control required" />
                </div>
                <div className="col-md-6">
                  <label>CANTIDAD DE FERTILIZANTE (ha) </label>
                  <input type="text" className="form-control required" />
                </div>
                <div className="col-md-6">
                  <label>KG RECOLECTADOS DEL PRODUCTO (ha) </label>
                  <input type="text" className="form-control required" />
                </div>
                <div className="col-md-6">
                  <label>TIEMPO DE ESPERA PROXIMA SIEMBRA</label>
                  <input type="text" className="form-control required" />
                </div>
                <div className="col-md-6">
                    <label>FECHA DE SIEMBRA DEL CULTIVO</label>
                    <input type="text" className="form-control required" />
                  </div>
                  <div className="col-md-6">
                    <label>FECHA DE RECOGIDA DEL CULTIVO</label>
                    <input type="text" className="form-control required" />
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
    )
}
