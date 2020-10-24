import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
let store = createStore(reducers);

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

export default store




