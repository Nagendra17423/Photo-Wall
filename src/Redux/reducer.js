import _post from '../Data/post';
import { combineReducers } from 'redux';


function comment(state={},action)
{
    switch(action.type)
    {
        case "add-Comment":
            // console.log("postId:"+action.postId);
            // return {...state,[action.postId]:[action.comment]}
            if (!state[action.postId]) {  
            	 return {...state, [action.postId]: [action.comment]}  
            	 } else {  
                	 return {...state, [action.postId]: [...state[action.postId], action.comment] }  
                	 } 
                     
            case "LOAD_COMMENTS": return action.comments;

                

        default:
            return state;

    }
    
} 

	
    







function post(state = _post,action){
    console.log(action.index);
    switch(action.type)
    {
        case "Remove-Post":
            return [...state.slice(0,action.index),...state.slice(action.index+1)]
            break;
        case "add-Photo":
            return [action.post,...state];
            break;
            case 'LOAD_POSTS': 
            return action.post;
            break;
        default:
            return state;
    }
    // return state;

}


const rootReducer=combineReducers({post,comment});

// export default postReducer;
export default rootReducer;