import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {connect } from 'react-redux';
import {logout} from '../store/actions/auth';
import DefaultProfileImg from "../img/dfimage.png";






 class Navbar extends Component {
 
  
    logout = (e) =>{
        e.preventDefault();
        this.props.logout();
        
    }

  render() {
      
    
  
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                     <Link className="navbar-brand "  to='/'>Momuzio </Link>
        <div className='navbar-nav  '>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                
                        {this.props.currentUser.isAuthenticated ? (
                            <ul className="navbar-nav ">
														{this.props.currentUser.user ? (
															<Link
																 to={`/auth/${this.props.currentUser.user.id}`}
																 >

																	<div className="current-user">
																<img 
																				alt={this.props.currentUser.user.username}
																				src={this.props.currentUser.user.profileImg || DefaultProfileImg}
																				id='avatar'
																	/>
																	<span id='title'>
																				{this.props.currentUser.user.username}
																	</span>

																</div>
																				
														 </Link>






                   

                ) : false}
                 
                            <li className="nav-item">
                                 <Link
                                className="nav-link"
                                 to={`/users/${this.props.currentUser.user.id}/posts/new`}
                                 >
                               New Post
                                 </Link>
                            </li>
                            <li className="nav-item" >
                                <a  className="nav-link" onClick={this.logout } href='/'>Log out </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home page</Link>
                            </li>
                            </ul>
                            ) :(
                            <ul className=" navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home page</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link"  to='/signin'>Sign in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to='/signup'>Sign up</Link>
                            </li>
                            </ul> )}
                </div>
                </div>
            </nav>
          
 
    )
  }
}
function mapStateToProps(state) {
    return {
    posts:state.posts,
    currentUser: state.currentUser
    };
  }
export default connect(mapStateToProps,{logout})(Navbar);