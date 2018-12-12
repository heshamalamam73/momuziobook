import { apiCall } from '../../services/api';
import { addError } from './errors';
import { REMOVE_POST, LOAD_POSTS ,SHOW_POST} from '../actionTyps';
import currentUser from '../reducers/currentUser';
import Axios from 'axios';


export const loadPosts = posts =>({
    type: LOAD_POSTS,
    posts
});
export const showPost = id =>({
  type : SHOW_POST,
  id
});

export const remove = id =>({
    type:REMOVE_POST,
    id
  })
  export const removePost =(user_id,post_id) =>{
    return dispatch =>{
      return apiCall('delete',`/api/users/${user_id}/posts/${post_id}`)
      .then(()=> dispatch(remove(post_id)))
      .catch(err => addError(err.message));
    }
  }

  export const fetchPosts = () => {
    return dispatch => {
      return apiCall("Get", "/api/posts")
        .then(res => {
          dispatch(loadPosts(res));
        })
        .catch(err => {
          dispatch(addError(err.message));
        });
    };
  };
  export const showUnPost = (id) => {
    return dispatch => {
      return apiCall("Get", `/api/posts/${id}`)
        .then(res => {
          dispatch(showPost(res));
        })
        .catch(err => {
          dispatch(addError(err.message));
        });
    };
  };

  export const postNewPost = post => (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.id;
    Axios.post(`/api/users/${id}/posts`, post)
      .then(res => { })
      .catch(err => addError(err.message));
  };


