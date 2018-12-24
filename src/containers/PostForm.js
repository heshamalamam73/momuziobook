import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewPost } from "../store/actions/posts";
import axios from 'axios'

class PostForm extends Component {
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
		  e.preventDefault();
		  const newpost ={
			text,
			img
      }
      const texta = document.getElementById('text');
      if (texta.value !== "momuzio"){
        texta.setCustomValidity("you should add momuzio in the post");
      } else{
        texta.setCustomValidity("")
      }
	
     this.props.postNewPost(newpost);
     this.props.history.push("/");

   
    }
  render() {
    return (
      <form  className='post-form' onSubmit={this.handleNewPost} >
      <label htmlFor='text'> Text </label>
       <textarea 
      type='text'
      name='text'
      id='text'
      

      onChange={(e)=> this.setState({text: e.target.value})}
      /> 
      <label htmlFor='image'>
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

export default connect(mapStateToProps, { postNewPost })(PostForm);
