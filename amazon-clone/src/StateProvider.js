import React, { createContext, useReducer, useContext } from "react";

// Prepares data layer
export const StateContext = createContext();

//Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
