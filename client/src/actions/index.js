import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_QUESTIONS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchQuestions = () => async (dispatch) => {
  const res = await axios.get("/api/questions");
  console.log("dentro do fetch questions");
  console.log(res.data);

  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};
