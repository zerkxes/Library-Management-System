import React from 'react';

const authContext = React.createContext( {
    isLoggedIn: false,
    userName: null
})

export default authContext;