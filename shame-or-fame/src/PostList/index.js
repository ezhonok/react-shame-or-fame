import React from 'react'


const Posts = (props) => {
	const PostList = props.posts.map((post) => {
		return (

			<li key={post._id}>
				
				<p>{post.title}</p>
				<p>{post.description}</p>
				<button
				onClick={props.deletePost.bind(null, post._id)}
				>Delete Post</button>
				<button
				onClick={props.showModal.bind(null, post)}
				>Edit Post</button>
			</li>
			)
	}) 
	return (
		<div className="listOfPosts">
			<ul>
			<strong>Recent Happenings:</strong>
				{PostList}
			</ul>
		</div>
		)
}


export default Posts;
