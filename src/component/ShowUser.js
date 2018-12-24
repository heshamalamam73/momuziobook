import React, { Component } from 'react'
import axios from 'axios';
import Moment from 'react-moment';
import { menu, imgUpoad } from './helper';

export default class ShowUser extends Component {
    state={
        user:[],
				posts:[],
				profileImg:''
    }

    componentDidMount(){
				let {id}=this.props.match.params ;
				
        axios.get(`/api/auth/${id}`)
        .then(res=>(
					console.log(res.data.profileImg),

            this.setState({
								user:res.data,
								profileImg:res.data.profileImg,
                posts:res.data.posts
            })
				))
				this.changeImage= (e)=>{
					imgUpoad(e);
					let img = document.getElementById('profileImg')
					this.setState({
						profileImg:img.src
					})
					console.log(this.state.profileImg)
		
					
		
				}
			
    }
   
  render() {
      let user = this.state.user
    //  

  
    
    return (
      
      <div className='user-profile'>
          	<div className='profile-cover'>
                {/* <img src={default_cover} /> */}
                    <div className='profile-content' onClick={this.handleClick}>
													<div className='profile-img'>
													<label>
													<img id='profileImg'  alt={user.username} src={user.profileImg} />
													<input onChange={this.changeImage} type='file' style={{"display":'none'}}/>
													</label>

													</div>
													<div className='profile-name'> 
															<h1>{user.username}</h1>
													</div>
													
                     </div>
          		</div>
       
            {
            this.state.posts.map((post,index) => {
              return (
                  <div className='post-profile' key={index} > 
                    <div className='timeline'>
                    <li className="timeline-content" >
                    <div className='profile-date' > 
                    <div  className="profile-image">
                   
                    
                    <img  src={user.profileImg  } alt={user.username} />

                   
                        </div>
                        <div className='profile-name'>
                        <h6 >
                            {/* <a href={`/auth/${user.user_Id}`}> */}
                            {user.username}
                            {/* </a> */}
                        </h6>
                        </div>
                    </div>
                    {post.img && (
                    <div className="post-img">
                        <img alt={post.username} src={post.img}/>
                    </div>
                    )}
                
                    <div className='post-text'>
                    <a href={`/users/${user._id}/posts/${post._id}`}>
                            <p className='post-text'>{post.text}</p>
                        </a>
                    </div>
                    
                    <div className='btns-box'>
                    <span className="post-date">
                        <Moment  format="Do MMM YYYY">
                            {post.date}
                        </Moment>
                        </span>
                        <div className='btns'>
                        <button id='likebtn'  >like</button>
                        <button >  comment </button>
                        {/* {isCorrectUser &&(
                        <button   onClick={removePost} >Delete</button>
                        )} */}
                        {/* {isCorrectUser &&(
                        <button   onClick={removePost} >edit</button>
                        )} */}
                    
                    </div>

                    </div>
                    <input style={{'width':'100%', 'display':'block','color':'white' ,'backgroundColor':'black', 'borderRadius':'30px'}} type='text'  />

                </li>
            </div>
            </div>
                        
                        )
                        })
                    }
                
      </div>
    )
  }
}
