// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import channelsReducer from './reducers/channels_reducer';
import messagesReducer from './reducers/messages_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// Set initial Redux State
const initialState = {
  messages: [],
  channels: ['general', 'le wagon', 'alumni'],
  currentUser: prompt("What's your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
