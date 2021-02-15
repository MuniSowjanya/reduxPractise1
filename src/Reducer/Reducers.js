import {combineReducers} from 'redux'
import testreducer from './reducer'
import testreducer2 from './reducer2'
import UserReducer from './UserReducer'
const Reducers=combineReducers({
    test:testreducer,
    test2:testreducer2,
    Users:UserReducer
  
})


export default Reducers;