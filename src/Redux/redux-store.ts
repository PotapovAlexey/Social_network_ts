import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware  from"redux-thunk"
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));


export type AppStateType = ReturnType<typeof rootReducer>






