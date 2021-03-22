import React , { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import 'tachyons';
import Logo from './components/Logo/Logo';
import ImageLinkform from './components/ImageLinkform/ImageLinkForm';
class App extends Component{
  
  render(){

    return (
      <div className="App">
      <Navigation />
     <Logo />
       <ImageLinkform/>
    {/*  <Facerecognition/>
       */} 
      </div>
    );

  }
  
}

export default App;
