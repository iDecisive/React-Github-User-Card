import React from 'react';
import logo from './logo.svg';

import Card from './components/Card';

import axios from 'axios';

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

  //Functions

  getUsers = _ => {

    console.log('getUsers has been called');

    axios.get("https://api.github.com/users/iDecisive").then(response => {
  
      let data = response.data;

      let newUsersData = [

        {

          image: data.avatar_url,
          name: data.name,
          username: data.login,
          location: data.location,
          url: data.html_url,
          followers: data.followers,
          following: data.following,
          bio: data.bio

        }

      ]

      this.setState({

        usersData:[...newUsersData]

      });

    }).catch(_ => "Catch")

    //from old user-card code: const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

  }

  render() {
  return (
    <div className="App">

      {this.state.usersData.map((item, index) => <Card user={item} getUsers={this.getUsers} key={index}/>)}

      {/* <Card user={this.state.usersData[0]} getUsers={this.getUsers}/> */}

    </div>
  );
  }
}

export default App;
