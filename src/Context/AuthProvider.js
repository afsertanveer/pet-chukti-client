import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from './../firebase/fireabase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

        //sign out
        const logOut = () => {
          setLoading(true);
          return signOut(auth);
        };
        useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
          });
          return () => {
            return unsubscribe();
          };
        }, []);
    const authInfo = {
      user,
      loading,
      setLoading,
      createUser,
      logOut,
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;