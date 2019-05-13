import React, { Component } from 'react';
import GoogleApiWrapper from '../MapContainer'

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const loginResponse = await fetch('http://localhost:9000/auth/login', {
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
        <br/><br/><button>Login</button>
      </form>
      )
  }
}

export default Login;
