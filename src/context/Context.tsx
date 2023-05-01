import { createContext, useReducer } from 'react';
import { UserType } from '../types/UserType';
import { UserInitialState, userReducer } from '../reducer/userReducer';
import { ReducerActionType } from '../types/ReducerActionTypes';

// Agrupa dos os context usados no APP
// Neste exemplo estou usando apenas 1. Mas se criar outros, como por exemplo Theme, facilitará
type initialStateType = {
    user: UserType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

// Inicializa os states
const initialState = {
    user: UserInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: ReducerActionType) => ({
    user: userReducer(state.user, action)
});

export const ContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
}

