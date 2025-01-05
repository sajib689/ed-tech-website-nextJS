'use client';

import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    UserCredential,
    onAuthStateChanged,
    User
} from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import auth from './../Firebase/Firebase.init';

// Define the context type
interface AuthContextType {
    user: User | null;  // Include user in context
    createUserWithForm: (email: string, password: string) => Promise<UserCredential>;
    signWithForm: (email: string, password: string) => Promise<UserCredential>;
    signWithGoogle: () => Promise<UserCredential>;
    signWithGithub: () => Promise<UserCredential>;
    logout: () => Promise<void>;
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
    // State for the user and loading status
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

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

    // Track the authenticated user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Auth context value
    const authInfo: AuthContextType = {
        user,
        createUserWithForm,
        signWithForm,
        signWithGoogle,
        signWithGithub,
        logout,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
