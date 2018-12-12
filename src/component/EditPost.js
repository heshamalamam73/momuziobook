import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewPost } from "../store/actions/posts";
import axios from 'axios'

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      img:'',
      uploud: 0,
      state: false

    };
  }
  componentDidMount(){
    const {userId,postId}=this.props.match.params
    axios.get(`/api/users/${userId}/posts/${postId}`)
    .then(
           res => {
                this.setState({
                    text:res.data.text,
                    img:res.data.img
                })
           }
       )
  }

  imgUpoad = (e) => {
  const cFile = e.target.files[0];

  if (cFile !== '' && cFile.size >= 10485760 ){
     alert('file selected is too larg please select another file ')
     e.target.value=''
	}else{
	const data = new FormData();
	const file = e.target.files[0]
	data.append('file', file)
	data.append('upload_preset',"wxhp02hu");
    axios.post('https://cors-anywhere.herokuapp.com/https://api.cloudinary.com/v1_1/momuzio/image/upload ',data,
  {
    onUploadProgress: (ProgressEvent) => {
      console.log(Math.floor(ProgressEvent.loaded/cFile.size *100));
      this.setState({
        uploud : Math.floor(ProgressEvent.loaded/cFile.size *100)

      })
    }
  }
  
    )
  .then(res =>{this.setState({ img :res.data.secure_url })}).then(this.setState({ state : true}))

	.catch(err =>{console.log(err)})
  }
 
	
}
    handleNewPost=(e)=>{
         const {img,text} =this.state
         const {userId,postId}=this.props.match.params

		  e.preventDefault();
		  const newpost ={
			text,
			img
		  }
      axios.put(`/api/users/${userId}/posts/${postId}?_method=put`,newpost)
      .then(res => console.log(res))
      this.props.history.push("/");
   
    }
  render() {
    return (
      <form  className='post-form' onSubmit={this.handleNewPost} >
      <label for='text'> Text </label>
       <textarea 
      type='text'
      name='text'
      id='text'
      value={this.state.text}
      onChange={(e)=> this.setState({text: e.target.value})}
      /> 
      <label for='image'>
        Image
      </label>
      <input 
      id='image'
      type='file'
      onChange={this.imgUpoad}
      /> 

      {this.state.uploud ? (<p> Uploading Image  :  {this.state.uploud} % </p>): false }
      {this.state.img ? (<img src={this.state.img}   /> ) : false}
      <hr></hr>
      <button  type='submit'>add post </button>

        
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, { postNewPost })(EditPost);
