import React from 'react'


const Posts = (props) => {
	const PostList = props.posts.map((post) => {
				console.log(post)
		return (
			<li key={post._id}>
				<p>Reported by: {post.user[0].username}</p>
				<p>What happened: {post.title}</p>
				<p>Incident description: {post.description}</p>


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
