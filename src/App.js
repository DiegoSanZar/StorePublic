import react from 'react'
import {Switch, BrowserRouter as Router} from "react-router-dom"
import PortadaView from './views/PortadaView'
import NavTop from './components/NavTop'
import Routes from './Routes'
import CarritoContextProvider from "./context/carritoContext"

function App() {
  return (
      <Router>
        <CarritoContextProvider>
          <NavTop></NavTop>
          <Switch>
            <Routes />
          </Switch>
        </CarritoContextProvider>
      </Router>
   
  );
}

export default App;
