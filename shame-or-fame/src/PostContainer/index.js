import React, { Component } from 'react';
import CreatePost from '../CreatePost';
import Posts from '../PostList';
import SimpleMap from '../MapContainer'

class PostContainer extends Component {

  constructor(){
    super();

    this.state = {
      posts: [],
    }
  }

  componentDidMount(){
    this.getPosts();
  }


  getPosts = async () => {

    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL +'/api/posts');

	      if(response.status !== 200){
	        throw Error(response.statusText);
	      }

      const postsParsed = await response.json();

      this.setState({posts: postsParsed.data});

    } catch (err){
      console.log(err);
    }
  }


  addPost = async (post, e) => {

    e.preventDefault();
    console.log(post)

    try {
      const createdPost = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createdPost.json();
      console.log(parsedResponse)

      this.setState({posts: [...this.state.posts, parsedResponse.data]})

    } catch(err){
      console.log(err)
    }
  }


  render(){
    console.log(this.state, "PostContainer state")
    return (
      <div>
        <CreatePost addPost={this.addPost}/>
        <Posts
        	posts={this.state.posts} 
        	/>
      </div>
      )
  }
}

export default PostContainer;
