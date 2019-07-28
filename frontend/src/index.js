import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'


// redux
import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";


// persistant state
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage/session";


// reducers
import authReducer from "./reducers/authReducer";


// persist the auth state in the sessionstorage
const authPersistConfig = {
  key: "auth",
  storage: storage,
  blacklist: []
};



const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer)
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

