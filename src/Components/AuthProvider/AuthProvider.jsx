import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/Firebase.config';

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const[isUpdating,setUpdating]=useState(false)
    const [loading,setLoading] = useState(true)




    const createUserWithEmail = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
     }
 
     const signInUSer = (email,password)=>{
         setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
     }
 
     const signOutUser = () =>{
         setLoading(true)
         return signOut(auth)
     }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('currently logged user',currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])



    const authInfo = {
        createUserWithEmail,
        user,
        setUser,
        signInWithGoogle,
        signOutUser,
        signInUSer,
        loading,
        setLoading,
        setUpdating


    }





    return (

       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;