'use client'

import { GoogleAuthProvider,GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode } from "react";
import auth from './../Firebase/Firebase.init';

interface AuthContextType {
    user?: string; 
    login?: () => void;
    logout?: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode; 
}
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({ children }: AuthProviderProps) => {

    const signWithForm = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    const authInfo = {
        signWithForm,
        signWithGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
