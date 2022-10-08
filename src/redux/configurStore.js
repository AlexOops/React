import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer/chatReducer";
import {messageReducer} from "./reducers/messageReducer/messageReducer";

import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import {apiReducer} from "./reducers/ApiReducer/ApiReducer";

const config = {
    key: 'root',
    storage
}

export const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer,
    posts: apiReducer
})

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);