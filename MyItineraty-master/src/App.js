import React from 'react';
import './App.css';
import Header from './componente/header';
// import Content from './componente/' ; >FALTA HACER
import Body from './componente/Body';
import alinks from './componente/alinks';
import Footer from './componente/footer';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import Login from './componente/login';
//import Signup from './componente/signup';
//import Cities from './componente/Cities';
import store from './store';


// import filterForm from '.../buscador';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header></Header>
          <Body></Body>
              <Router>
                    <Switch>
                      <Route exact={true} path="/alinks" component={alinks} />
                      {/* <Route path="/Cities" component={Cities} />  */}
                    </Switch> 
                     
                  </Router>
          {/* <filterForm></filterForm> */}
          {/* <Body></Body>
          <Cities></Cities> */}
          <Footer></Footer>
        </div>
      </Provider>
    )
  }
}
export default App 

