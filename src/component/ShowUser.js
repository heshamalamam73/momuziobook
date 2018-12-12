import React, { Component } from 'react'
import Axios from 'axios';
import Moment from 'react-moment';

export default class ShowUser extends Component {
    state={
        user:[],
        posts:[]
    }

    componentDidMount(){
        let {id}=this.props.match.params ;
        Axios.get(`/api/auth/${id}`)
        .then(res=>(
           
            this.setState({
                user:res.data,
                posts:res.data.posts
            })

        ))
    }
   
  render() {
      let user = this.state.user
    //  

  
    
    return (
      
      <div className='user-profile'>
          <div className='profile-cover'>
                {/* <img src={default_cover} /> */}
                    <div className='profile-content'>
                    <div className='profile-img'>
                    <a href={user.profileImg}>
                    <img alt={user.username} src={user.profileImg}  />

                    </a>
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
                   
                    
                    <img src={user.profileImg  } alt={user.username} />

                   
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
