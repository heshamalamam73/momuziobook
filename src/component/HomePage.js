import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
      <div className='content'>
      <h1>What's up?</h1>
        <h4>New to Momuzio Chat?</h4>
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
    <div>
    <MessageTimeline
      profileImg={currentUser.user.profileImg}
      username={currentUser.user.username}
    />
  </div>
  );
};

export default Homepage;