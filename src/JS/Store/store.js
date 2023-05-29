import { createStore } from "redux";
import rootReducer from "../Redcucers";

const store = createStore (rootReducer)

export default store;