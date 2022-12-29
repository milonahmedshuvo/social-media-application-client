import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import app from '../firebase.config';

const auth = getAuth(app);

export const AuthContext= new createContext()

const Context = ({children}) => {
    const [user, setUser]=useState(null)
    const [reaction, setReactions]=useState('')



    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser=()=>{
        return signOut(auth)
    }

    const googleSingIn=(pro)=>{
        return signInWithPopup(auth, pro)
    }

   useEffect(()=>{
   const unsubcribe= onAuthStateChanged(auth, (currentUser)=>{
        
        setUser(currentUser)
    })
    return ()=> unsubcribe()
   },[])


    const authInfo={user,createUser, singIn, signOutUser, googleSingIn, reaction, setReactions }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;