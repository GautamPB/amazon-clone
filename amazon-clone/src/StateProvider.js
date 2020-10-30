//to set up data layer to keep record of basket items
//to also help in user login and logout

import React, { createContext,useContext, useReducer} from "react";

//this is the data layer
export const StateContext = createContext();

//build a provider to wrap app an give access to data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);