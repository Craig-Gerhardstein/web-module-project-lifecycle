import React from 'react'


class UserCard extends React.Component {

    render() {
        return(
            <div>
                <h1>{this.props.userData.name}</h1>
                <div>
                <img src={this.props.userData.avatar_url} alt={this.props.userData.name} /> 
                </div>
                <div>
                    <p>Followers: {this.props.userData.followers}</p>
                    <p>Following: {this.props.userData.following}</p>
                </div>
                
                
                
                
            </div>
        )
    }
}
export default UserCard