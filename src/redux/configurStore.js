import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer/chatReducer";
import {messageReducer} from "./reducers/messageReducer/messageReducer";

import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";

const timeout = store => next => action => {
    const delayMs = action?.meta?.delayMs

    if (!delayMs) {
        return next(action);
    }

    const result = setTimeout(() => next(action), delayMs)
    return () => {
        clearTimeout(result);
    }
}

const config = {
    key: 'root',
    storage
}

export const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(persistedReducer, applyMiddleware(timeout));
export const persistor = persistStore(store);