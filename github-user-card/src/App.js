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
          followers_url: null,
          bio: null

          }
        ]

      }
  }

  //Functions

  componentDidMount() {

    axios.get("https://api.github.com/users/bigknell").then(response => { //Target user
  
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
          followers_url: data.followers_url,
          bio: data.bio

        }

      ]



      this.setState({

        usersData:[...newUsersData]

      });

      if (this.state.usersData[0].followers_url === null) {

        return <h1>Waiting for data</h1>
  
      } else {
  
        console.log('First users data loaded')

        axios.get(this.state.usersData[0].followers_url).then(response => {

          console.log(response.data);

          for (let i=0; i<10; i++) {

            let data = response.data[i];

            let newUsersData = [
      
              {
      
                image: data.avatar_url,
                name: data.name,
                username: data.login,
                location: data.location,
                url: data.html_url,
                followers: data.followers,
                following: data.following,
                followers_url: data.followers_url,
                bio: data.bio
      
              }
      
            ]
      
      
      
            this.setState({
      
              usersData:[
                
                ...this.state.usersData,
                ...newUsersData

              ]
      
            });

          }

        })

      }
  

    }).catch(_ => "Catch");


  }

  render() {
  return (
    <div className="App">

      {this.state.usersData.map((item, index) => <Card user={item} key={index}/>)}

      {/* <Card user={this.state.usersData[0]} getUsers={this.getUsers}/> */}

    </div>
  );
  }
}

export default App;
