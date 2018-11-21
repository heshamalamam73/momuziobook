import currentUser from './currentUser';
import errors from './error';
import {combineReducers} from 'redux'
import messages from './messages';


const rootReducers = combineReducers({
    currentUser,
    errors,
    messages,
    
});
export default rootReducers;




