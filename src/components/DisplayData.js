import React from 'react'
import styled from 'styled-components'

const UserData = styled.div `
/* border: 5px solid black; */
display: flex; 
flex-direction: column;
align-items: center;

`;


const Followers = styled.div `
border: 5px solid black;
border-radius: 0px 20px 20px 20px;
width: 20%;

display: flex;

align-content: center;
/* flex-direction: column; */
justify-content: space-evenly;
flex-shrink: 3;
img{
    width: 30%;
    
}



`
const UserDiv = styled.div `
display:flex;
border: 5px solid black;
align-items: center;
flex-direction: column;




`
const FContainer = styled.div `
/* border: 5px solid black; */
display: flex;
flex-wrap: wrap;
justify-content: center;
justify-content: space-evenly;
align-items: center;



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
                
                <Followers>
                
                <img src={follows.avatar_url} alt='' />
                {/* <div className="name">Name: {follows.name}</div> */}
                <div className="name">Username: {follows.login}</div>
                {/* <div className="name">Location: {follows.location}</div> */}
                {/* <div className="name">Bio: {follows.bio}</div>
                <div className="name">Following: {follows.following}</div> */}
                </Followers>
                
            
                
            )})}
            </FContainer>
         </UserData> 
    )}