import React from 'react';
import logo from './logo.svg';

import Card from './components/Card';
import FollowersCard from './components/FollowersCard';

import axios from 'axios';

import './App.css';


class App extends React.Component {

  constructor() {

    super();

    this.state =
      
      {

        mainUser:

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

        },

        followers: []

      }
  }

  //Functions

  componentDidMount() {

    axios.get("https://api.github.com/users/bigknell").then(response => { //Target user
  
      let data = response.data;

      let newMainUser =

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


      this.setState({

        mainUser:{...newMainUser}

      });

      if (this.state.mainUser.followers_url === null) {

        return <h1>Waiting for data</h1>
  
      } else {
  
        console.log('First users data loaded')

        axios.get(this.state.mainUser.followers_url).then(response => {

          console.log(response.data);

          for (let i=0; i<10; i++) {

            let data = response.data[i];

            let newFollowers = [
      
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
      
              followers:[
                
                ...this.state.followers,
                ...newFollowers

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

      <Card user={this.state.mainUser}/>      

      <h2>Followers</h2>

      {this.state.followers.map((item, index) => <FollowersCard user={item} key={index}/>)}>

    </div>
  );
  }
}

export default App;
