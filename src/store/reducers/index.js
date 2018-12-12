import currentUser from './currentUser';
import errors from './error';
import {combineReducers} from 'redux'
import messages from './messages';
import posts from './posts'


const rootReducers = combineReducers({
    currentUser,
    errors,
    messages,
    posts
    
});
export default rootReducers;




