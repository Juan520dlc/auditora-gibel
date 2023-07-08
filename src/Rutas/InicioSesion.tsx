import React from 'react'
import { useReducer } from "react";
import { AppRouter } from '../app/router/AppRouter';
import { AuthContext } from '../app/views/auditor/contexts/AuthContext';
import { authReducer } from '../app/views/auditor/reducers/authReducer';

const init = () => {
    let sessionUser:any = sessionStorage.getItem('user');
    let user:any;
    if(!sessionUser){
        user = sessionUser;
    }else{
        user = JSON.parse(sessionUser);
    }
    return user;
};

function InicioSesion() {
    const [user, dispatchUser] = useReducer(authReducer, {}, init);

    return (
        <div className='inicioSesion'>
            <AuthContext.Provider value={{ user, dispatchUser }}>
                <AppRouter/>
            </AuthContext.Provider>
            <h1>Login</h1>
        </div>
    );
}

export default InicioSesion;