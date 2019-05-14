import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '500px',
  height: '500px'
  
}

export class MapContainer extends Component {
	render() {
		return (
			<Map google={this.props.google} style={style} zoom={14} 
		        >
				
				<Marker onClick={this.onMarkerClick}
					name={'Current location'} />

				<InfoWindow onClose={this.onWindowClose}>
					<div>
					</div>
				</InfoWindow>
			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_API_KEY
}) (MapContainer)