import React from 'react';
import './HomePage.css'

import Hero from '../components/Hero';
import Carousel from '../components/Carousel'
import Footer from '../components/Footer';

function Homepage (props) {
    
 
  return(
    <div id="App">
    <Hero title={props.title} sub={props.sub}/>
    <Carousel />
    
    </div>
   
  );
  
}
export default Homepage;