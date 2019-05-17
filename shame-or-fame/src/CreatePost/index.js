import React, { Component } from 'react'

//call function in compdidmount and update state with info

class CreatePost extends Component {
	constructor(props){
		super(props)

		this.state = {
			title: '',
			description: ''//,
			// lat: 0,//this.props.lat,
			// lng: 0,//this.props.lng,
			// img: '' 
		}
	}
	// componentWillReceiveProps() {
	// 	this.setState({
	// 		lat: this.props.lat,
	// 		lng: this.props.lng
	// 	})
	// }
	updatePost = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}
	render(){
		console.log("this.state in render() in CreatePost");
		console.log(this.state);
		return (
			<form
				onSubmit={this.showCurrentLocation, this.props.addPost.bind(null, this.state)}>
			<label>
				Incident:
					<br/><input 
					type="text" 
					name="title" 
					onChange={this.updatePost}/>
			</label>
			<label><br/><br/>
				Description:
					<br/><textarea
					type="text"
					name="description"
					onChange={this.updatePost}/>
			</label><br/>

 			<label><br/>
				Photo URL:
					<br/><input
					type="text"
					name="img"
					onChange={this.updatePost}/>	
			</label><br/><br/>
			<input type='Submit'/>
		
			</form>
			)
	}
}

 export default CreatePost


