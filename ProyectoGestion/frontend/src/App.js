import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Barra from "./componentes/Barra";
import RegistroGestionPredios from "./componentes/RegistroGestionPredios";
import RegistroGestionarUsuarios from "./componentes/RegistroGestionarUsuarios";
import RegistroGestionCultivos from "./componentes/RegistroGestionCultivos";
import RegistroParametrosCultivos from "./componentes/RegistroParametrosCultivos";
import RegistroConfigurarCultivos from "./componentes/RegistroConfigurarCultivos";
import RegistroTipoCultivo from "./componentes/RegistroTipoCultivo";
import VerConfigurarCultivos from "./componentes/VerConsultas/VerConfigurarCultivos";
import VerGestionarUsuarios from "./componentes/VerConsultas/VerGestionarUsuarios"
import Login from "./componentes/Login"
import Index from './componentes/Index'
import Index2 from './componentes/Index2'
import Index3 from './componentes/Index3'
import VerTipoCultivo from "./componentes/VerConsultas/VerTipoCultivo";
import VerGestionCultivo from "./componentes/VerConsultas/VerGestionCultivos";
import VerGestionPredio from "./componentes/VerConsultas/VerGestionPredios";
import VerParametrosCultivo from "./componentes/VerConsultas/VerParametrosCultivos";



function App() {
  return (

    <Router>
      <Barra/>
      <Route path='/' exact component={Login}/>,
      <Route path='/index' exact component={Index}/>,
      <Route path='/index2' exact component={Index2}/>,
      <Route path='/index3' exact component={Index3}/>,
      <Route path='/RegistroGestionPredios' exact component={RegistroGestionPredios}/>,
      <Route path='/RegistroGestionarUsuarios' exact component={RegistroGestionarUsuarios}/>,
      <Route path='/RegistroGestionCultivos' exact component={RegistroGestionCultivos}/>,
      <Route path='/RegistroParametrosCultivos' exact component={RegistroParametrosCultivos}/>,
      <Route path='/RegistroConfigurarCultivos' exact component={RegistroConfigurarCultivos}/>,
      <Route path='/RegistroTipoCultivo' exact component={RegistroTipoCultivo}/>

      <Route path='/VerConfigurarCultivos' exact component={VerConfigurarCultivos}/>
      <Route path='/VerGestionarUsuarios' exact component={VerGestionarUsuarios}/>
      <Route path='/VerTipoCultivo' exact component={VerTipoCultivo}/>
      <Route path='/VerGestionCultivos' exact component={VerGestionCultivo}/>
      <Route path='/VerGestionPredios' exact component={VerGestionPredio}/>
      <Route path='/VerParametrosCultivos' exact component={VerParametrosCultivo}/>









      
      
        
    </Router>


  );
}

export default App;
