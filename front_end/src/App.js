import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import LandingPage from "./pages/Landing";
import LoginPage from "./pages/Login";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Plan from "./pages/Plan";
import MySims from "./pages/MySims";
import Inside from "./pages/Inside";
import Main from "./layouts/Main";

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={LandingPage} />
          <Route exact path='/login' Component={LoginPage} />
          <Route exact path='/account' Component={Account} />
          <Route exact path='/checkout' Component={Checkout} />
          <Route exact path='/plan' Component={Plan} />
          <Route exact path='/inside' Component={Inside} />
          <Route exact path='/mysims' Component={MySims} />
        </Routes>
      </BrowserRouter>

    </Main>
  );
}

export default App;
