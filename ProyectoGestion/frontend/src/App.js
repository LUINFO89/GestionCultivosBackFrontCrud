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
import Login from "./componentes/Login"
import Index from './componentes/Index'


function App() {
  return (

    <Router>
      <Barra/>
      <Route path='/' exact component={Login}/>,
      <Route path='/index' exact component={Index}/>,
      <Route path='/RegistroGestionPredios' exact component={RegistroGestionPredios}/>,
      <Route path='/RegistroGestionarUsuarios' exact component={RegistroGestionarUsuarios}/>,
      <Route path='/RegistroGestionCultivos' exact component={RegistroGestionCultivos}/>,
      <Route path='/RegistroParametrosCultivos' exact component={RegistroParametrosCultivos}/>,
      <Route path='/RegistroConfigurarCultivos' exact component={RegistroConfigurarCultivos}/>,
      <Route path='/RegistroTipoCultivo' exact component={RegistroTipoCultivo}/>
      <Route path='/VerConfigurarCultivos' exact component={VerConfigurarCultivos}/>





      
      
        
    </Router>


  );
}

export default App;
