import React from 'react';
import {Switch, Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import HomePage from '../component/HomePage';
import AuthForm from '../component/AuthForm';
import {authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from "../hocs/withAuth";
import MessageForm from './MessageForm';
import UserProfile from '../component/UserProfile';



const Main = props =>{
    const {authUser ,errors ,removeError , currentUser,loadUserProfile} = props;
    return(
        <Switch>
            <Route
            exact
            path="/"
            render={props => <HomePage currentUser={currentUser} {...props} />}
            />
            <Route 
                exact
                path='/signin'
                render={
                    props =>{
                        return(
                            <AuthForm 
                            removeError={removeError}
                            errors={errors}
                            onAuth={authUser}
                                buttonText='Log in '
                                heading ='Welcome Back'
                                {...props}
                            />
                        );
                    }}
             />
              <Route 
                exact
                path='/signup'
                render={
                    props =>{
                        return(
                            <AuthForm 
                            errors={errors}
                            removeError={removeError}
                            onAuth={authUser}
                            signup
                                buttonText='sign up '
                                heading ='join Momuzio Chat'
                                {...props}
                            />
                        );
                    }}
             />
              <Route 
                exact
                path='/api/users/:id'
                render={
                    props =>{
                        return(
                            <UserProfile 
                            errors={errors}
                            removeError={removeError}
                            onAuth={loadUserProfile}
                                {...props}
                            />
                        );
                    }}
             />
             <Route
             path="/users/:id/messages/new"
          component={withAuth(MessageForm)}
        />
        </Switch>
    )
}
 function mapStateToProps(state) {
     return {
        currentUser: state.currentUser,
        errors : state.errors
     }
 };

 export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));