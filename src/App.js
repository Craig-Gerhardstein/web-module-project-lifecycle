import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import Followers from './components/Followers'
import styled from 'styled-components'

class App extends React.Component {
  state= {
    userData: [],
    followers: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/Craig-Gerhardstein')
      .then(res => {
        this.setState({
          userData: res.data
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios.get('https://api.github.com/users/Craig-Gerhardstein/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
        console.log(res.data)
        
        })
        .catch(err => {
          console.log(err)
      })

  }

  render() {
    return (
      <Container className="App">
        <header className="App-header">
          <UserCard userData={this.state.userData}/>
          <FollowersDiv>
          <Followers followers={this.state.followers} key={this.state.followers.id}/>

          </FollowersDiv>
          
            
          
            
            
          
          
         
        </header>
      </Container>
    );

  }
  
}

const Container = styled.div ` 
border: 2px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center
`
const FollowersDiv = styled.div ` 


display: flex;
justify-content: center;
align-items: center;

`

export default App;
