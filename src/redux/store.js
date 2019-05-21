import { createStore } from "redux";
import studentReducer from "./studentreducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage
};

const persistRed = persistReducer(persistConfig, studentReducer);

const store = createStore(persistRed);
const persistor = persistStore(store);

export { store, persistor };
