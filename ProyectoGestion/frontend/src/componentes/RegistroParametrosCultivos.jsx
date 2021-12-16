import React from 'react'

export default function RegistroParametrosCultivos() {
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
            <form onSubmit={"guardar"}>
              <div className="row">
                <div className="form-group">
                  <label>ID PARAMETRO CULTIVO</label>
                  <input type="text" className="form-control required" />
                  <label>ID CULTIVO</label>
                  <input type="text" className="form-control required" />
                  <label>VALOR SEMILLA</label>
                  <input type="text" className="form-control required" />
                  <label>VALOR M3 AGUA</label>
                  <input type="text" className="form-control required" />
                  <label>VALOR KG FERTILIZANTE</label>
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
    )
}
