import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '500px',
  height: '500px',
  
}

export class MapContainer extends Component {

	render() {
		console.log(this.props.posts);
		const postMarkers = this.props.posts.map((posts, i) => {
			console.log(posts.lat);
			return (
				<Marker key={posts.id} name={posts.description} position={{lat: posts.lat, lng: posts.lng}} />
			)
		})
	return	(
			<Map
				google={this.props.google}
				style={style}
				zoom={16}
				initialCenter={{lat: 41.8907616, lng: -87.6268411}}
		        >
				
				<Marker onClick={this.onMarkerClick}
					name={'Current location'} />
					{postMarkers}
				<InfoWindow onClose={this.onWindowClose}>
					<div>
					hey
					</div>
				</InfoWindow>
			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)