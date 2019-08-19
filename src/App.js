import React from 'react';
import './App.css';
import { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

import World from './features/world';
import Header from './features/header/header.component'
import PartyMenu from './features/partyStatusMenu/index';
import GlobalAudio from './features/music';

class App extends Component {
  //===============================experimental code block============
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      email: null
    };
  }
//============================end experimental code block================
  render() {
    return (
      <div className='wrapper'>
      <Header />
      {/* <BrowserRouter>
        <Switch>
            <Route exact path='/charactergen' component={CharCreatePage}/>
        </Switch>
      </BrowserRouter> */}
            <GlobalAudio/>
          {/* <User name="Jessica Doe" email="hello@jessica.com" />; */}
        <div className='worldMap visible'>
            <World />
        </div>
            <PartyMenu />
      </div>     
    );    
  }
}

export default App;

