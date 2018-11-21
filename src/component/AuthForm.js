import React, { Component } from 'react';
import axios from 'axios'


export default class AuthForm extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            profileImg:'',
            email:''
        }
    }
    handlerChange = (e) =>{

        this.setState({
            [e.target.name] : e.target.value

    })
    }
    imgUpoad = (e) => {
        const cFile = e.target.files[0];

        if (cFile > 110000 ){
            alert('file selected is too larg please select another file ')
        }else{
        const data = new FormData();
        const file = e.target.files[0]
        data.append('file', file)
        data.append('upload_preset',"wxhp02hu");
        axios.post('https://api.cloudinary.com/v1_1/momuzio/image/upload',data)
        .then(res =>{this.setState({ profileImg :res.data.secure_url })})
        .catch(err =>{console.log(err)})
        }
        
    }
    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signup ? "signup" : "signin";
        this.props
        .onAuth(authType, this.state)
        .then(() => {
            this.props.history.push('/')
        })
        .catch(()=>{
            return
        })
      };

  render() {

      const { email, username, password } = this.state;
      const { heading,buttonText,signup,errors,history,removeError} = this.props 
      history.listen(()=>{removeError();});
    return (
        <div className="home-hero ">
        <div className='content'>
                <h1>{heading}</h1>
                {errors.message && (
                    <div className='alert alert-denger'>{errors.message} </div>
                )}
                <form  onSubmit={this.handleSubmit}> 
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input value={email} onChange={this.handlerChange}  type="email" className="form-control" name='email'  aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input value={password}  onChange={this.handlerChange} type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    {signup && (
                          <div className="form-group">
                                <label htmlFor="exampleInputEmail1">User Name</label>
                                <input value={username}  onChange={this.handlerChange} type="text" className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username"/>
                                <label htmlFor="exampleInputPassword1">Profile Image </label>
                                <input  onChange={this.imgUpoad} type="file" className="form-control-file" />
                          </div>

                    )}
                   
                    <button type="submit" className="btn btn-primary">{buttonText}</button >
                </form>
                </div>
        </div>
     
    )
  }
}
