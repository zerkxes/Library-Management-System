import React from 'react';

const authContext = React.createContext( {
    isLoggedIn: false,
    userName: null,
    role: 'Student'
})

export default authContext;