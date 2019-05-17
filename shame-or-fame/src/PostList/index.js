import React from 'react'



//<p>Reported by: {post.user.username}</p>

const Posts = (props) => {

	console.log("props for posts: ", props)

	const PostList = props.posts.map((post) => {
				// console.log("one post: ", post)
		return (
			<li key={post._id}>


				<p>What happened: {post.title}</p>
				<p>Incident description: {post.description}</p>
				<div>
					<img src={post.img}/>
				</div>
				<button
				onClick={props.deletePost.bind(null, post._id)}>
				Delete</button>
				<button
				onClick={props.showModal.bind(null, post)}>
				Edit</button>
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




