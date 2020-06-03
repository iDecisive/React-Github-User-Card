import React from 'react';
import logo from './logo.svg';

import Card from './components/Card';

import './App.css';


class App extends React.Component {

  constructor() {

    super();

    this.state =
      
      {

        usersData: [

          {

          image: '',
          name: 'Name',
          username: 'Username',
          location: 'Location',
          url: 'Url',
          followers: 0,
          following: 0,
          bio: null

          }
        ]

      }



  }

  render() {
  return (
    <div className="App">

    <Card user={this.state.usersData[0]}/>

    </div>
  );
  }
}

export default App;
