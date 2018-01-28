import { combineReducers } from 'redux';
import BookReducer from './reducer_books'
import NameReducer from './reducer_name'

const rootReducer = combineReducers({
  books : BookReducer,
  todos: NameReducer
});

export default rootReducer;
