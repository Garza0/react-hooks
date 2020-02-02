import React, { useReducer } from 'react';
import { GithubContext } from './githubContext';

export const GithubState = ({ children }) => {
  const [state, dispatch] = useReducer()

  return (
    <GithubContext.Provider value={{}}>
      {children}
    </GithubContext.Provider>
  )
}