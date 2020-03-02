import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavMenu from './components/layouts/Navbar'
import Splash from './components/layouts/Splash'
import About from './components/layouts/About';
import Dash from './components/dashboard/Dash'
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div style={{backgroundColor: "#1b1b1b"}}>
        <NavMenu/>
        <Switch>
        <Route exact path ="/home" component={Splash}/>
        <Route exact path ="/" component={Splash}/>
        <Route path="/about" component={About}/>
        <Route path="/dashboard" component={Dash}/>
       </Switch>
        </div>
      </BrowserRouter>
   
    )
  }
  
}

export default App;