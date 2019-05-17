import React from 'react'

const EditPost = (props) => {
	return (
		<div>
			<strong> Edit Your Post </strong>
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
					<br/><input 
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