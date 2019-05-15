import React, { Component } from 'react';
import GoogleApiWrapper from '../MapContainer'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
    }
    
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  handleSubmit = async (e) => {
    
    // adding a comment, testing something out here

    e.preventDefault();

    try {

      const loginResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();

      if(parsedResponse.data === 'login successful'){
        this.props.history.push('/posts')
      }


    } catch (err) {

    }
  }
  render(){

    return (
      <form onSubmit={this.handleSubmit}>
        Username:
        <br/><input 
          type='text'
          name='username'
          onChange={this.handleChange}/><br/><br/>
        Password:
        <br/><input
          type='password'
          name='password'
          onChange={this.handleChange}/>
        <br/><br/><button>Login</button><br/>
        <p>or</p><Link to="/register">Register Here</Link>
      </form>
      )
  }
}

export default Login;
