import React from 'react';
import {Switch, Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import HomePage from '../component/HomePage';
import AuthForm from '../component/AuthForm';
import {authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from "../hocs/withAuth";
import MessageForm from './MessageForm';
import PostForm from './PostForm';
import ShowUser from '../component/ShowUser';
import ShowPost from '../component/ShowPost';
import EditPost from '../component/EditPost';



const Main = props =>{
    const {authUser ,errors ,removeError , currentUser} = props;
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
             path="/users/:id/messages/new"
          component={withAuth(MessageForm)}
        />
         <Route
             path="/users/:id/posts/new"
          component={withAuth(PostForm)}
        />
          <Route
             path="/auth/:id"
          component={withAuth(ShowUser)}
        />
          <Route
          exact
             path="/users/:userId/posts/:postId"
          component={withAuth(ShowPost)}
        />
         <Route
         exact
             path="/users/:userId/posts/:postId/edit"
             component={withAuth(EditPost)}
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