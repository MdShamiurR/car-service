import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext =  createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //checking the current user
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('current User:',currentUser)
            setLoading(false)
        });
        return()=>{
            return unsubscribe();
        }
    },[])


    const authInfo={
        user,
        loading,
        createUser,
        signInUser
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;