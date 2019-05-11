import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import HorizontalRecommendation from './components/HorizontalRecommendation';
import HorizontalSection2 from './components/HorizontalSection2';

import Books from './books';

class App extends Component {



  state = {
    arry: []
  }

  componentDidMount() {
    //this.setState({Boks: Books})
    //console.log(Books);
    this.setState({arry: Books});
    //console.log(this.state.arry)
  }

  render() {

    return (
      <div className="App">
        <Nav/>
        <Header/>
        <HowItWorks/>
        <HorizontalRecommendation Boods={this.state.arry} />
        <HorizontalSection2 />
      </div>
    );
  }

}

export default App;
