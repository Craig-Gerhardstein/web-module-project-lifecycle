import React from 'react'
import styled from 'styled-components'


class UserCard extends React.Component {

    render() {
        return(
            <Container>
                <h1>{this.props.userData.name}</h1>
                <ImgDiv>
                <img src={this.props.userData.avatar_url} alt={this.props.userData.name} /> 
                </ImgDiv>
                <div>
                    <p>Followers: {this.props.userData.followers}</p>
                    <p>Following: {this.props.userData.following}</p>
                </div>
                
                
                
                
            </Container>
        )
    }
}

const Container = styled.div `
border: 1px solid black;
width: 100%;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 1%;

    


`
const ImgDiv = styled.div ` 

width: 50%;
img{
    width: 100%;
}
`

export default UserCard