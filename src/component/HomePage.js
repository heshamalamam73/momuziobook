import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";
import PostTimeline from './PostTimline';









const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="sign-page">
      <div className='content'>
      <h1>What's up?</h1>
        <h4>New to Momuzio ?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here
        </Link>
        <p>have already un account ? </p>
        <Link className="btn btn-success" to ='/signin'>sign in</Link>
      </div>
       
      </div>
    );
  }
  return (
    <div className='home-page'>
      
 
     <PostTimeline
      profileImg={currentUser.user.profileImg}
      username={currentUser.user.username}
      userId = { currentUser.user.id}
    /> 
    
    
  </div>
  );
};

export default Homepage;