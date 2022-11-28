import 'materialize-css/dist/css/materialize.min.css';
import "materialize-css/dist/js/materialize.min.js";
import 'material-icons/iconfont/material-icons.css'
import logo from './logo.svg';
import './App.css';

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Shop} from "./components/Shop";

function App() {
  return (
    <>
      <Header></Header>
        <Shop></Shop>
      <Footer></Footer>
    </>
  );
}

export default App;
