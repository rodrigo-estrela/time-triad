import { combineReducers } from "redux";
import authReducer from "./authReducer";
import quizReducer from "./quizReducer";
import usersReducer from './usersReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  users: usersReducer,
  form: formReducer,
});
