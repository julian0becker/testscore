import { createStore } from "redux";
import studentReducer from "./studentreducer";

const store = createStore(studentReducer);

export default store;
