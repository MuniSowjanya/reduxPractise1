import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import Reducer from './Reducer/Reducers'
import reportWebVitals from './reportWebVitals';
const initialState={
  count:0,  user: '', data: [], isLoading: true 
}
const store =createStore(Reducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
store.subscribe(()=>{
  console.log("store data::",store.getState())
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
