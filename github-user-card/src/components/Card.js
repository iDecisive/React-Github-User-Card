import React from 'react';

import './card.css'

class Card extends React.Component {

    constructor(props) {
        super();

    }

    componentDidMount() {

        if (this.props.user === undefined) {

            return 'Waiting on user data...'

        } 

    }

    render() {

        let {user, getUsers} = this.props;

        return (

            <div className='card'>

                <img src={user.image}/>

                <div className='card-info'>

                    <h3 className='name'>{user.name}</h3>

                    <p className='username'>{user.username}</p>

                    <p>Location: {user.location}</p>

                    <p>Profile: {user.url}</p>

                    <p>Followers: {user.followers}</p>

                    <p>Following: {user.following}</p>

                    <p>Bio: {user.bio}</p>

                </div>


            </div>

        )

    }

}

export default Card;