import React, { Component } from 'react'


class CreatePost extends Component {
	constructor(){
		super()

		this.state = {
			title: '',
			description: '',
			// img: '' 
		}
	}
	updatePost = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}
	render(){
		return (
			<form
				onSubmit={this.props.addPost.bind(null, this.state)}>
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

			<input type='Submit'/>
			</form>
			)
	}
}

 export default CreatePost



 		// 	<label><br/>
			// 	Photo URL:
			// 		<br/><input
			// 		type="text"
			// 		name="img"
			// 		onChange={this.updatePost}/>	
			// </label><br/><br/>