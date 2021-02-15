import { FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './types'
import axios from 'axios'
export const fetchUsers = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) => {

    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFail = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}


export const fetchingUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsers());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                let users = response.data
                //console.log("--users", users);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFail(error))
            })
    }
}



