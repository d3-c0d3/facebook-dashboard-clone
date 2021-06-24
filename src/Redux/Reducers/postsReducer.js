import {ActionTypes} from '../Constants/actionTypes';

const initialFeedState={
    posts:[],
}

export const postReducer=(state=initialFeedState,actions)=>{
    if(actions.type===ActionTypes.SET_POSTS){
        return{
            ...state,posts:actions.payload
        };
    }
    else{
        return state;
    }
}