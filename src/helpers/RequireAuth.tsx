import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { Context } from '../context/Context';

export const RequireAuth = ({children}: any) => {
    const {state} = useContext(Context);
    let isAuth = state.user.name !== '' ? true: false;

    if (!isAuth) {
        return <Navigate to='/' />
    }

    return children;
}