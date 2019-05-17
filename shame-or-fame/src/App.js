import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import PostContainer from './PostContainer'
import Login from './Login'
import Register from './Registration'


console.log(process.env)

const My404 = () => {
	return (
		<div>
			404 Error
		</div>
		)	
}


function App() {
	console.log("process.env: ", process.env)
  return (
    <div>
      <Switch>
      	<Route exact path="/" component={ Login } />
      	<Route exact path="/register" component={ Register } />
      	<Route exact path="/posts" component={ PostContainer } />
      	<Route component={My404} />
      </Switch>
    </div>
  );
}

export default App;
