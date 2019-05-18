import React, { Component } from 'react';
import CreatePost from '../CreatePost';
import Posts from '../PostList';
import EditPost from '../EditPost'
import MapContainer from '../MapContainer'
import GoogleApiWrapper from '../MapContainer'

class PostContainer extends Component {

  constructor(){
    super();

    this.state = {
      posts: [],
      postToEdit: {
        _id: null,
        title: '',
        description: '',
        address: '',

        lat: 0,
        lng: 0
      },
      modalShowing: false,
      lat: 0,
      lng: 0,
    }
  }

  componentDidMount(){
    this.showCurrentLocation()
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


  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        }
      )
    }
    // console.log(this.state);
    // console.log(navigator.geolocation);
  }


  addPost = async (post, e) => {

    e.preventDefault();
    // this.showCurrentLocation()
    console.log(this.state.lat);
    console.log(this.state.lng);
    console.log("post: ", post)

    try {
      const createdPost = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title:post.title,
          description: post.description,
          address: post.address,
          img: post.img,
          lat: this.state.lat,
          lng: this.state.lng,
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("raw response: ", createdPost)

      const parsedResponse = await createdPost.json();
      console.log("parsed response: ", parsedResponse)

      this.setState({posts: [...this.state.posts, parsedResponse.data]})

    } catch(err){
      console.log(err)
    }
  }



edit = async (e) => {
   e.preventDefault()

   try {
      const editRes = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/posts/' + this.state.postToEdit._id, {
         method: 'PUT',
         body: JSON.stringify(this.state.postToEdit),
         headers: {
            'Content-Type': 'application/json'
         }
      })
      const parsedResponse = await editRes.json()
      const editedPosts = this.state.posts.map((post) => {
         if(post._id === this.state.postToEdit._id){
            post = parsedResponse.data
         }
         return post
      })
      this.setState({
         posts: editedPosts,
         modalShowing:false
      })
   } catch(err) {
      console.log(err);
   }
}


handleFormChange = (e) => {
  this.setState({
    postToEdit: {
      ...this.state.postToEdit,
      [e.target.name]: e.target.value
    }
  })
}

showModal = (post) => {
  this.setState({
    modalShowing: true,
    postToEdit: post
  })
}

deletePost = async (id, e) => {
  console.log(id, 'this is post id in PostContainer delete');
  e.preventDefault()
  try {
    const deletedPost = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/posts/' + id, {
      method: 'DELETE',
      // credentials: 'include'
    })
    this.setState({posts: this.state.posts.filter((post, i) => post._id !== id)})
  } catch(err) {
    console.log(err, 'error when deleting in post container');
  }
}

  render(){
      console.log('this.state in render in PostContainer')
      console.log(this.state);
    return (
      <div>
        <CreatePost 
          addPost={this.addPost} 
          lat={this.state.lat} 
          lng={this.state.lng}
         />
         <div className="mapContainer">
            <GoogleApiWrapper posts={this.state.posts}/>
         </div>
        <Posts
          posts={this.state.posts}
          deletePost={this.deletePost}
          showModal={this.showModal}
          
         />
         {this.state.modalShowing ? <EditPost postToEdit={this.state.postToEdit} edit={this.edit} handleFormChange={this.handleFormChange}/>: null}
      </div>
      )
  }
}

export default PostContainer;
