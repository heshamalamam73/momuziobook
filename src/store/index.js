import rootReducers from './reducers';
import {createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import '../css/main.css'



export function configureStore () {
    const store = createStore(
        rootReducers,
        compose(applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        
        )
    )
    return store;
}