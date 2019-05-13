import React, { Component } from 'react'


class CreatePost extends Component {
	constructor(){
		super()

		this.state = {
			title: '',
			description: '',
			img: '' //obv not a string - FIGURE IT OUT!
		}
	}
	updatePost = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}
	render(){
		return (
			<form
				onSubmit={this.props.addPost.bind(null, this.state)}
				action="/action_page.php">
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
				Photo:
					<br/><input
					type="file"
					name="img"
					accept="image/*"/>	
			</label><br/><br/>
			<input type='Submit'/>
			</form>
			)
	}
}

 export default CreatePost