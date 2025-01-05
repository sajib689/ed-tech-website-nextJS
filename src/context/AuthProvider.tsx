'use client';

import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    UserCredential
} from "firebase/auth";
import { createContext, ReactNode } from "react";
import auth from './../Firebase/Firebase.init';

// Define the context type
interface AuthContextType {
    createUserWithForm: (email: string, password: string) => Promise<UserCredential>;
    signWithForm: (email: string, password: string) => Promise<UserCredential>;
    signWithGoogle: () => Promise<UserCredential>;
    signWithGithub: () => Promise<UserCredential>;
    logout: () => Promise<void>;  // Updated the return type
}

// Create the context with the defined type
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }: AuthProviderProps) => {
    // Create user with email and password
    const createUserWithForm = (email: string, password: string): Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in with email and password
    const signWithForm = (email: string, password: string): Promise<UserCredential> => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in with Google
    const signWithGoogle = (): Promise<UserCredential> => {
        return signInWithPopup(auth, googleProvider);
    };

    // Sign in with Github
    const signWithGithub = (): Promise<UserCredential> => {
        return signInWithPopup(auth, githubProvider);
    };

    // Sign out
    const logout = (): Promise<void> => {
        return signOut(auth);
    };

    // Auth context value
    const authInfo: AuthContextType = {
        createUserWithForm,
        signWithForm,
        signWithGoogle,
        signWithGithub,
        logout,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
