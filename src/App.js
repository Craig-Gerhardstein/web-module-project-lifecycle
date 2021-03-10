import axios from 'axios';
import React, { Component } from 'react'
import DisplayData from './components/DisplayData'
import Search from './components/Search'


export default class App extends Component {

  state = {
    gitHubData: [],
    currentUser: [],
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/Craig-Gerhardstein')
    .then(res => {
      this.setState({
        gitHubData: res.data,
      })
      console.log(res.data)
    })
    .catch(err => {
      console.log('This is the error', err)
    })

    axios.get('https://api.github.com/users/Craig-Gerhardstein/followers')
    .then(res => {
      this.setState({
        followers: res.data,
      })
      console.log("This is followers data", res.data)
    })
    .catch(err => {
      console.log('This is the followers error', err)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser !== this.state.currentUser) {
      axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then( res => {
        this.setState({
          gitHubData: res.data,
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then( res => {
        this.setState({
          followers: res.data,
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      
  }}

  currentUserState = (searchedUser) => {
    this.setState({
      currentUser: searchedUser
    })
  }

  render() {
    const {gitHubData, followers} = this.state;
    return (
      <div>
        <DisplayData gitHubData={gitHubData} followers={followers}/>
        <Search searchedUser={this.currentUserState} />
      </div>
    )
  }
}