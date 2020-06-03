import React from 'react';

import './followerscard.css'

class FollowersCard extends React.Component {

    constructor(props) {
        super();

    }

    componentDidMount() {

        if (this.props.user === undefined) {

            return 'Waiting on user data...'

        } 

    }

    render() {

        let {user} = this.props;

        return (

            <div className='card-follower'>

                <img src={user.image}/>

                <div className='card-info'>

                    <p className='username'>{user.username}</p>

                    <p>Profile: {user.url}</p>

                </div>


            </div>

        )

    }

}

export default FollowersCard;