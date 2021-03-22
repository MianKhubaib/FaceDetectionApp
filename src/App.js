import React , { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import 'tachyons';
import Logo from './components/Logo/Logo';
import ImageLinkform from './components/ImageLinkform/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const Particlesoptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA933",
        blur: 5
      }
    }
  }
};

class App extends Component{
  
  render(){

    return (
      <div className="App">
      <Particles className='particles'
         params={Particlesoptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkform/>
       
    {/*  <Facerecognition/>
       */} 
      </div>
    );

  }
  
}

export default App;
