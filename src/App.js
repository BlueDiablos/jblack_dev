import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Splash from './components/layouts/Splash'
import About from './components/layouts/About';




class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path ="/" component={Splash}/>
        <Route path="/about" component={About}/>
       </Switch>
        </div>

      </BrowserRouter>
   
    )
  }
  
}

export default App;