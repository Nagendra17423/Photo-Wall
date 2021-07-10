import React, { Component } from'react';
import ReactDom, { render } from 'react-dom';
import Main from './Component/Main';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './Redux/reducer';
import {Provider} from 'react-redux';
import App from "./Component/App";
import thunk from 'redux-thunk';
import {database} from './Database/config';

const store=createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));



// const element=React.createElement('h1',null,'hello bro');
// const element =React.createElement('ul',null,
// React.createElement('li',null,'first'),
// React.createElement('li',null,'second'),
// React.createElement('li',null,'third'));

// const arr=['first','second','third'];
// const element=<ol>
//   {arr.map((a)=><li>{a}</li>)}
// </ol>

// const element=<ol>
//   <li>{arr[0]}</li>
//   <li>{arr[1]}</li>
//   <li>{arr[2]}</li>
// </ol>

ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));