import { combineReducers } from "redux";
import { HeaderActions, HeaderAction } from "../types/headerState"



const initialState = {
    isOpen:true,
}

export const headerReducer = (state = initialState, action:HeaderAction) => {
    switch(action.type){
        case HeaderActions.OPEN_MENU:
            return { isOpen:true };
        case HeaderActions.CLOSE_MENU:
            return { isOpen:false };
        default:
            return state;
    }
}


export const rootReducer = combineReducers(
    {header:headerReducer}
)


export type RootState = ReturnType<typeof rootReducer>