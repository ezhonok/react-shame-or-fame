import React from 'react'



const Posts = (props) => {

	console.log("props for posts: ", props)

	const PostList = props.posts.map((post) => {
				console.log("one post: ", post)
		return (
			<li key={post._id}>
				 
				<p>What happened: {post.title}</p>
				<p>Incident description: {post.description}</p>

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


//<p>Reported by: {post.user[0].username}</p>

// <img src={post.img}/>