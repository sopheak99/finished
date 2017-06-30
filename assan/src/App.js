import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Content from './Components/Content';
=======
import TopNavigation from './Components/TopNavigation'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'

>>>>>>> 186f14eec8c87648f9788287411646f7251291a9
class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        
        <Content />
      
=======
        {<TopNavigation/>}
        {<Navigation/>}
        {<Footer/>}
>>>>>>> 186f14eec8c87648f9788287411646f7251291a9
      </div>
    );
  }
}

export default App;
