import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";

function VerGestionarUsuarios() {
  // se colocan los parametros de los registros
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [idPersona,setidPersona] = useState("");
  const [apellidos, setApellidos] = useState("");

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
    const respuesta = await Axios.get("/usuarios/listarUsuarios/", {
      headers: { autorizacion: token },
    });

    console.log(respuesta);
    setUsuarios(respuesta.data);
  };





  //metodo para crear modal y actualizar los campos

  const obtenerDatoP = async (idParametro) => {

    setShow(true)
    //const id = idParametro;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/usuarios/listarporid/" , {
      headers: { autorizacion: token },
    });
    // se traen los set de los datos
    console.log(respuesta.data);
    setidPersona(respuesta.data._id);
    setNombre(respuesta.data.nombre);
    setApellidos(respuesta.data.apellidos);
  };

  const data = usuarios.map((usuarios) => ({
    id: usuarios._id,
    nombre: usuarios.nombre,
    apellidos: usuarios.apellidos,
  }));



  //----------------------------------CREAR--------------------------------------
  const guardar = async(e) =>{
    e.preventDefault()
    const usuario = {// se crea la variable y se llaman los campos a guardar como en el back
      nombre,
      apellidos

    }
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
    }

///-------------------------------FIN ELIMINAR ---------------------
  

  //----------------------------------------actualizar------------------------------

  const actualizar = async(e) =>{
    e.preventDefault()
    const id = id
    const usuario = {// se crea la variable y se llaman los campos a guardar como en el back
      nombre,
      apellidos

    }

    
      const token = sessionStorage.getItem('token')
      // ruta que se trabajo en el back
      const respuesta = await Axios.put('/usuarios/actualizar/' + id,usuario,{
        headers:{'autorizacion':token}

      })

      const mensaje = respuesta.data.mensaje

      obtenerDatos()
      
      console.log(mensaje)
      //genera mensaje de creado
      Swal.fire({
        icon:"success",
        title:mensaje,
        showConfirmButton:false,
        timer:1500
      })

      setShow(false)
      

    }



  



//--------------------------------------fin actualizar----------------------------------

//---------------------------------------INICIO ELIMINAR-----------------------------

const eliminar  = async(id) =>{
  
    const token = sessionStorage.getItem('token')
    // ruta que se trabajo en el back
    const respuesta = await Axios.delete('/usuarios/eliminar/' + id , {
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
        title="Ver Usuarios"
        columns={[
         
          { title: "NOMBRES", field: "nombre" },
          { title: "APELLIDOS", field: "apellidos" },
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
            onClick:(event,rowData)=>eliminar(rowData.id)
          },
          {
            icon: "edit",
            tooltip: "Crear",//activamos en onclic y agregamos el evento editarobtenerDatoP
            onClick:(event,rowData)=>obtenerDatoP(rowData.id)
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
                    <i class="fas fa-user-circle"></i>
                  </div>
                  <div className="card-header bg-info text-center">
                    <h4>Perfil de Usuarios</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={actualizar}>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Nombre</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre} // s eagregan los valores de nombre
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Apellidos</label>
                          <input
                            type="text"
                            className="form-control required"
                            onChange={(e) => setApellidos(e.target.value)}
                            value={apellidos} // se agrega el valor de apellido
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
          <Button variant="primary" onClick={guardar}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/** fin del modal */}
    </div>
  );
}

export default VerGestionarUsuarios;
