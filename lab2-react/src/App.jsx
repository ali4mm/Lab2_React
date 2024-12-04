// Ali Kazem Mahdy -Lab2
//create  components App, Effect,Context,NameButton,CityButton and EmailButton

import React from 'react'
import Effect from './Effect'
import { UserProvider } from './Context'

function App() {
    return (
        // this a context provider component that is around Effect component to all users and setUsers allowed to any child component
        <UserProvider>
            <Effect />
        </UserProvider>
    )
}

export default App
