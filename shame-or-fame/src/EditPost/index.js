import React from 'react'

const EditPost = (props) => {
	return (
		<div className="edit">
			<strong> Edit Your Post </strong><br/><br/>
			<form onSubmit={props.edit}>
				<label>
					Edit Title:
					<br/><input
					type="text"
					name="title"
					onChange={props.handleFormChange}
					value={props.postToEdit.title}/>
				</label>
				<label><br/><br/>
					Edit Incident Description:
					<br/><input 
					type="text"
					name="description"
					onChange={props.handleFormChange}
					value={props.postToEdit.description}/>
				</label><br/><br/>
				<input type='Submit'/>
				</form>
		</div>

		)
}

export default EditPost