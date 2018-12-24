import React from "react";
import Moment from "react-moment";
import DefaultProfileImg from "../img/dfimage.png";

const handleLike=(e)=>{
    e.preventDefault();
alert('pressed like')


}



const PostItem = ({
  date,
  profileImg,
  text,
  id,
  img,
  userId,
  username,
  comments,
  removePost,
  isCorrectUser
 }) => (
  <div key={id}  className='timeline'>
     <li  className="timeline-content">
     <div className='profile-date'> 
     <div  className="profile-image">
            <img src={profileImg || DefaultProfileImg} alt={username} />
        </div>
        <div className='profile-name'>
        <h6 >
            <a href={`/auth/${userId}`}>
              {username}
            </a>
        </h6>
        </div>
     </div>
  
     {img && (
       <div className="post-img">
       <a href={`/users/${userId}/posts/${id}`}>
         <img alt={username}  src={img}/>
         </a>

       </div>
     )}
   
   
       <div className='post-text'>
       <a href={`/users/${userId}/posts/${id}`}>
            <p className='post-text'>{text}</p>
        </a>
  
        {comments.length !==0 ? (
              <ul className='comments-box' >
                <hr></hr>
             {
               comments.map(comment =>{
                 return (
                   
                  <li key={comment._id}> 
                    <div className='profile-date'> 
                      <div  className="profile-image">
                              <img src={comment.commentImg || DefaultProfileImg} alt={comment.commentName} />
                          </div>
                          <div className='profile-name'>
                          <h6 >
                              <a href={`/auth/${comment.user}`}>
                              {comment.commentName}
                              </a>
                          </h6>
                          </div>
                      </div>
                      <p>{comment.text}</p>
                   </li> 
                 )
               })
             }
              
            </ul>
        ): false}
    
    
       </div>
       
       <div className='btns-box'>
       <span className="post-date">
        <Moment  format="Do MMM YYYY">
            {date}
          </Moment>
          

          
        </span>
        <div className='btns'>
        <button id='likebtn' onClick={handleLike} >like</button>
        <a  href={`/users/${userId}/posts/${id}`}> <button>Comment</button></a>
        {isCorrectUser &&(
          <div>
               <button   onClick={removePost} >Delete</button>
           <a href={`/users/${userId}/posts/${id}/edit`}>edit</a>


            </div>
     
        )}
          {/* {isCorrectUser &&(
        <button   onClick={removePost} >edit</button>
         )} */}
      
        </div>
       
       

        </div>
  

    </li>
  </div>
);

export default PostItem;
