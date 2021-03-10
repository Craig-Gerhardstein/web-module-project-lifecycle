import React from 'react'
import styled from 'styled-components'

const UserData = styled.div `
border: 5px solid black;
display: flex; 
flex-direction: column;
align-items: center

`;


const Followers = styled.div `
border: 5px solid black;
width: 80%;
display: flex;
flex-direction: column;
align-content: center;

`
const UserDiv = styled.div `
border: 5px solid black;
align-items: center
div{
    align-content: center;    

}



`
const FContainer = styled.div `
border: 5px solid black;
display: flex;
flex-wrap: wrap;
;

`

export default function DisplayData(props) {
    const { gitHubData, followers } = props;

    return (
        <UserData>
            <UserDiv>
            <h1>Github User</h1>
            <img src={gitHubData.avatar_url} alt='' />
            <div className="name">Name: {gitHubData.name}</div>
            <div className="name">Username: {gitHubData.login}</div>
            <div className="name">Location: {gitHubData.location}</div>
            <div className="name">Bio: {gitHubData.bio}</div>
            <div className="name">Following: {gitHubData.following}</div>
            </UserDiv>
            <h2>Followers</h2>
            <FContainer>
            {followers && followers.map(follows => {
                return (
                    <FContainer>
                <Followers>
                
                <img src={follows.avatar_url} alt='' />
                <div className="name">Name: {follows.name}</div>
                <div className="name">Username: {follows.login}</div>
                <div className="name">Location: {follows.location}</div>
                <div className="name">Bio: {follows.bio}</div>
                <div className="name">Following: {follows.following}</div>
                </Followers>
                </FContainer>
            
                
            )})}
            </FContainer>
         </UserData> 
    )}