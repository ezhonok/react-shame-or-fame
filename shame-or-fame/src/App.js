import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import PostContainer from './PostContainer'
import Login from './Login'
import GoogleApiWrapper from './MapContainer'

console.log(process.env)

const My404 = () => {
	return (
		<div>
			404 Error
		</div>
		)	
}


function App() {
  return (
    <div>
	  <div className="mapContainer">
	    	<GoogleApiWrapper/>
	    </div>
      <Switch>
      	<Route exact path="/" component={ Login } />
      	<Route exact path="/posts" component={ PostContainer } />
      	<Route component={My404} />
      </Switch>
    </div>
  );
}

export default App;
