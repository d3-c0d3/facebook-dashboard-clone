import {combineReducers} from 'redux';
import {postReducer} from './postsReducer';

const reducers=combineReducers({
    postsList:postReducer
})

export default reducers;