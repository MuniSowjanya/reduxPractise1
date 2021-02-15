
import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAIL} from '../Actions/types'
const initialState={
    users:[],
    error:'',
    isLoading:false
}
const UserReducer=(state=initialState,action)=>{
switch(action.type){
case FETCH_USERS_REQUEST:
    return{
        ...state,
        isLoading:true
    }
    case FETCH_USERS_SUCCESS:
        // debugger;
        let usersArray = [...state.users, action.payload];

        return{
            ...state,
            users: usersArray,
            isLoading:false
        }
        case FETCH_USERS_FAIL:
            return{
                ...state,
                error:action.payload
            }
            default:
                return state
}
}
export default UserReducer;