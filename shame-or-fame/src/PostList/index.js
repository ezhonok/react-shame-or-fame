import React from 'react'



//<p>Reported by: {post.user.username}</p>

const Posts = (props) => {

	console.log("props for posts: ", props)

	const PostList = props.posts.map((post) => {
				console.log("one post: ", post)
		return (
			<li key={post._id}>


				<p>Incident:</p> {post.title}
				<p>Incident description: </p>{post.description}
				<p>Where did it happen? </p>{post.address}
				<p>Date and time posted: </p>{post.date}<br/><br/>
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
			<h1>What's been happening</h1>
				{PostList}
			</ul>
		</div>
		)
}


export default Posts;




