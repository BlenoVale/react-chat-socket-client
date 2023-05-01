import { UserType } from "../types/UserType";
import { ReducerActionType } from "../types/ReducerActionTypes";

export const UserInitialState: UserType = {
    name: ''
}

export const userReducer = (state: UserType, action: ReducerActionType) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
        default:
            return state;
    }
}