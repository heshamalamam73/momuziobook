// import React, { Component } from 'react'
// import DefaultProfileImg from "../img/dfimage.png";
// import {connect } from 'react-redux';
// import defaultcover from '../img/default_cover.jpg'





//  class UserProfile extends Component {
 
//   render() {
//     const {profileImg,username,coverImg} = this.props.currentUser.user;
    
//     return (
//       <div className='profile '> 
//       <div className='profile-content'>
//         <div id='profile-image'>
//             <img alt={username} src={profileImg|| DefaultProfileImg}/> 
//           </div>
//           <div className='profile-name'>
//           <h2>{username}</h2>

//           </div>
//       </div>
//         <cover className='profile-cover'>
//           <img alt={username}  src={coverImg || defaultcover}/>
//         </cover>
       

//   </div>

//     )
//   }
// }


// function mapStateToProps(state) {
//   return {
//     currentUser: state.currentUser
//   };
// }
// export default connect(mapStateToProps,null)(UserProfile);