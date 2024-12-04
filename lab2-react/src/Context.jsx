import React, { createContext, useState } from 'react';

export const UserContext = createContext(); // Create context with name UserContext that can import from any component by using UserContext

// Context provider component
export const UserProvider = ({ children }) => { // children is  special React props that nested inside component,
   // This variable now holds the content nested inside the component, and you can use it directly without call it by  props.children
  const [users, setUsers] = useState([]); //use the hook hook use State and use users as array with initial value is empty and use setUsers as update function

  return (
   //UserContext is use provider to get the value of users
   // Note that UserProvider component is using  UserContext.Provider to make users and setUsers available to any component that needs it
    <UserContext.Provider value={{ users, setUsers }}>

{/* write {children] between UserContext to be ensure that sure that any components wrapped inside UserProvider can use the users data */}
      {children}
    </UserContext.Provider>
  );
};
