import React, { Component } from 'react'
import Axios from 'axios';
import DefaultProfileImg from "../img/dfimage.png";
import Moment from "react-moment";
import {connect } from 'react-redux';



 class ShowPost extends Component {
     constructor(props){
         super(props)
       this.state={
            post:[],
            comments:[],
            user:'',
            text:'',
            liked: true,
            like: 1,
            currentUser: this.props.currentUser
    
        }
        // this.handleLike= this.handleLike.bind(this);

     }
   
    componentDidMount = () => {
     const {userId,postId}=this.props.match.params
     console.log(this.state.currentUser)
     Axios.get(`/api/users/${userId}/posts/${postId}`)
        .then(res => {
            this.setState({
                post: res.data,
                user: res.data.user,
                comments:res.data.comments
            })

        })
    this.handleSubmitComment=(e)=>{
            e.preventDefault();
            const {userId,postId}=this.props.match.params
            let newcomment ={
                text: this.state.text,
                user:this.state.currentUser.user.id ,
                commentName: this.state.currentUser.user.username,
                commentImg : this.state.currentUser.user.profileImg
            }
            Axios.post(`/api/users/${userId}/posts/${postId}/comments`,newcomment,{
                
            })
            .then(
                this.setState({text:''}),

            )
            .catch(err => console.log(err));
        
        }
      this.handleLike= ()=>{
            this.setState({
                liked:!this.state.liked,
                like:0
            })
            {!this.state.liked? this.setState({like: 1 }) : this.setState({like :0})}

            let like= this.state.like
            Axios.post(`/api/users/${userId}/posts/${postId}/comments`,like )
           
            }
      
           
    

    }
 




 
    
  render() {
      const label = !this.state.like  ? "UnLike" : "like"
      const post =this.state.post
      const {userId,postId}=this.props.match.params

      const {user} = this.state
    return (
      <div className='post-page'>
          
          <div className='post-body'>
          <div className='profile-date'> 
                <div  className="profile-image">
                        <img src={user.profileImg || DefaultProfileImg} alt='hi' />
                </div>
                <div className='profile-name'>
                    <h6 >
                        {user.username}
                    </h6>
                </div>
               
         </div>
              {post.img && 
                    <div className='post-img'>
                   
                    <img alt={user.username}  src={post.img} />
             
                    </div>
              }
              <div className='post-text'>
              <h1>
                  {post.text}
              </h1>
              </div>
              <div className='post-func'>
              <div>
               {this.state.comments.map(comment =>{
                   
                   return(
                       <div>
                           <h6> {comment.commentName}</h6>
                             <p>{comment.text}</p>

                        

                         </div>


                   )
               })}
              </div>
              <form onSubmit={this.handleSubmitComment}>
              <input type='text' value={this.state.text}  onChange={(e)=> this.setState({text:e.target.value})}/>
              </form>
              <button  onClick={this.handleLike}>{label}</button>
              {this.props.currentUser ? (

                  <a href={`/users/${userId}/posts/${postId}/edit`}>edit</a>
              ): false}

              </div>

           
          </div>

       
        
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
    posts:state.posts,
    currentUser: state.currentUser
    };
  }
export default connect(mapStateToProps,)(ShowPost);