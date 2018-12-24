
// import React, { Component } from 'react'
// import {fakeAuth} from './Header'
// import {Redirect} from 'react-router-dom'
// import axios from 'axios';

//hello 
// export default class Login extends Component {

//     state = {
//       email:'',
//       password:''

//     }
//     onChange= (event) => {
//       this.setState({
//         [event.target.name]:event.target.value
//       })
//       console.log(this.state)
//     }
//     handleSubmit=(e) =>{
//       e.preventDefault();
//       let user = {
//         password: this.state.password,
//         email: this.state.email,
       
//       }
//       axios.post('/api/auth/signin',user)
//       .then(res=> {
//         console.log(res)
//       })
//       .catch(err=>{
//         console.log(err)
//       });
//      console.log(this.state);
//     }
  
//     // login = () => {
//     //     fakeAuth.authenticate(() => {
//     //       this.setState(() => ({
//     //         redirectToReferrer: true
//     //       }))
//     //     })
//     //   }
//   render() {
//     // const { from } = this.props.location.state || { from: { pathname: '/' } }
//     //   const {redirectToReferrer} = this.state 
//     //   if (redirectToReferrer === true ){
//     //       return <Redirect to={from}/>
//     //   }
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//         <input type='text' name='email' onChange={this.handleChange} />
//         <input type='password' name='password' onChange={this.handleChange} />
//         <button>log in </button>
//         </form>
          
         
          
         
        
//       </div>
//     )
//   }
// }

