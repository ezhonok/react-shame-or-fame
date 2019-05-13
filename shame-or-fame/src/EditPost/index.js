import React from 'react'

const EditPost = (props) => {
	return (
		<div>
			<p> Edit Your Post </p>
			<form onSubmit={props.edit}>
				<label>
					Edit Title:
					<br/><input
					type="text"
					name="title"
					onChange={props.handleFormChange}
					value={props.postToEdit.title}/>
				</label>
				<label><br/>
					Edit Incident Description:
					<input 
					type="text"
					name="description"
					onChange={props.handleFormChange}
					value={props.postToEdit.description}/>
				</label><br/>
				<input type='Submit'/>
				</form>
		</div>

		)
}

export default EditPost