import {REMOVE_POST,LOAD_POSTS, SHOW_POST } from "../actionTyps";


const post = (state = [], action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return [...action.posts];
      case SHOW_POST:
        return {
          ...state, post:post._id
        }
      case REMOVE_POST:
        return state.filter(post => post._id !== action.id );
    default:
      return state;
  }
};

export default post;