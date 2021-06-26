import {createContext, useReducer} from 'react';

const INITIAL_STATE = {
    user: null,
    isFectching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{user: state.user, isFectching: state.isFectching, error: state.error, dispatch}} >
            {children}
        </AuthContext.Provider>
    )
};