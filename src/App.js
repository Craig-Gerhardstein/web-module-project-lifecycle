import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import Followers from './components/Followers'

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
      <div className="App">
        <header className="App-header">
          <UserCard userData={this.state.userData}/>
          
            
              <Followers followers={this.state.followers} key={this.state.followers.id}/>
            
            
          
          
         
        </header>
      </div>
    );

  }
  
}

export default App;
