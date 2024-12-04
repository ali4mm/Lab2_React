import React, { useContext, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import NameButton from './NameButton';
import CityButton from './CityButton';
import EmailButton from './EmailButton';
import { UserContext } from './Context';


const UserListStyle=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.bgColor || 'white'};
`;
const UserItemStyle = styled.h3`
color: ${props => (props.$filterField === 'city' ? '#2196F3' : (props.$filterField === 'email' ? '#FF9800' : '#4CAF50'))};
  margin: 10px 0;

`;
function Effect() {
 //we use hook userContext to access users and setUsers from any component by useContext,
 // we create UserContext by createContext and we used to share users and setUsers across components without need to use  props from component to another
 const{users,setUsers}=useContext(UserContext);
const[inputValue, setInputValue]=useState("");
const[filterField, setFilterField]=useState('name')



useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users') // use fetch to import data from external API
   .then(res =>res.json()) //call the response object and conver it to JSON (JavaScript Object Notation)
   .then(data=>setUsers(data)); //updater function provided by the useState hook. It updates the users state with the  data we bring from the API.
},[setUsers]); //the dependencey tell useEffect to run the effect only when setUsers changes

const filterUsers=useMemo(()=>{
   //we filtered the user array that we imported from external API and we use if else if the filterField is city we convert it to lower case to remove sensetivity
   //then check if the city include input value else if email or name we repeate same but with name or email
   return users.filter(user =>
      filterField === 'city'
         ? user.address.city.toLowerCase().includes(inputValue)
         : user[filterField].toLowerCase().includes(inputValue)
);


},[inputValue, filterField,users]); //we use useMemo to make filterUsers will only be chnaged when one of its dependencies (inputValue, filterField, or users) changes.


  return (
// changed <div> to <UserListStyle> to use style componenent for can use css inside java script
   <UserListStyle>
<input type='text'
placeholder='Enter name,email or city'
//onInput  is an event handler that listens for input events on the text box. Every time the user types or changes the text, this event happening.
//This function will updates the state variable inputValue with the current value of the input field,
onInput={e=> setInputValue(e.target.value)} />
{/* React components representing buttons and each component has onClick event that call setFilterField   */}
    <div>
      <h2>Import Data from external API</h2>
      <NameButton onClick={()=>setFilterField('name')}/>
      <CityButton onClick={()=>setFilterField('city')}/>
      <EmailButton onClick={()=>setFilterField('email')}/>


    </div>
    {/* we had filtered the array by using filterUsers ,we create a new array ny using by calling a provided function on every element in the filterUsers array. */}
    {filterUsers.map(user=>(
      <UserItemStyle key={user.id} $filterField={filterField}>
         {/* filterField is checked if it  is 'city', it will render user.address.city else will render email or name */}
         {filterField === 'city' ? user.address.city : user[filterField]}
         </UserItemStyle>
    ))}

   </UserListStyle>
  );
}

export default Effect
