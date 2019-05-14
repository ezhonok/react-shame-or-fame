import React, { Component } from 'react';
import CreatePost from '../CreatePost';
import Posts from '../PostList';
import EditPost from '../EditPost';
import SimpleMap from '../MapContainer'

class PostContainer extends Component {

  constructor(){
    super();

    this.state = {
      posts: [],
      postToEdit: {
        _id: null,
        title: '',
        description: '',
       
      },

      modalShowing: false
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

  edit = async (e) => {
    e.preventDefault();

    try {

      const editResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/posts/:id' + this.state.postToEdit._id, {
        method: 'PUT',
        body: JSON.stringify(this.state.postToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await editResponse.json();


      const editedPostArray = this.state.posts.map((post) => {

        if(post._id === this.state.postToEdit._id){

            post = parsedResponse.data;

        }

        return post
      });


      this.setState({
        posts: editedPostArray,
        modalShowing: false
      });

    }catch(err){
      console.log(err);
    }
  }


  handleFormChange = (e) => {
    this.setState({
      postToPost: {
        ...this.state.postToEdit,
        [e.target.name]: e.target.value
      }
    })
  }


  showModal = (post) => {
    console.log(post, 'showing modal')
    this.setState({
      modalShowing: true,
      postToEdit: post
    });
  }

  deletePost = async (id, e) => {
    console.log(id, ' post id in PostContainer delete post')
    e.preventDefault();
    try {
        const deletePost = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/posts' + id, {
          method: 'DELETE'
        });
        console.log('inside try')
        const deletePostJson = await deletePost.json();
        this.setState({posts: this.state.posts.filter((post, i) => post._id !== id)});

    } catch(err) {
      console.log(err, ' error')
    }
  }

  render(){
    console.log(this.state, "state in POstContainer")
    return (
      <div>
        <CreatePost addPost={this.addPost}/>
        <Posts
        	posts={this.state.posts} 
        	showModal={this.showModal} 
        	deletePost={this.deletePost} />

        {this.state.modalShowing ? <EditPost postToEdit={this.state.postToEdit} edit={this.edit} handleFormChange={this.handleFormChange}/> : null}
      </div>
      )
  }
}

export default PostContainer;
