import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
