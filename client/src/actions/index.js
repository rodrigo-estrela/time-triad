import axios from "axios";
import history from "../history";
import { FETCH_USER } from "./types";
import { FETCH_QUESTIONS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchQuestions = () => async (dispatch) => {
  const res = await axios.get("/api/questions");

  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};

export const postQuestion = (question) => async (dispatch) => {
  await axios.post("/api/questions", question);
};

export const postQuiz = (values) => async (dispatch) => {
  const res = await axios.post("/api/quiz", values);

  dispatch({ type: FETCH_USER, payload: res.data });

  history.push("/dashboard");
};
