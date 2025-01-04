'use client';

import { 
    GoogleAuthProvider, 
    GithubAuthProvider, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    UserCredential 
} from "firebase/auth";
import { createContext, ReactNode } from "react";
import auth from './../Firebase/Firebase.init';

// Define the context type
interface AuthContextType {
    signWithForm: (email: string, password: string) => Promise<UserCredential>;
    signWithGoogle: () => Promise<UserCredential>;
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
    // Sign in with email and password
    const signWithForm = (email: string, password: string): Promise<UserCredential> => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in with Google
    const signWithGoogle = (): Promise<UserCredential> => {
        return signInWithPopup(auth, googleProvider);
    };

    // Auth context value
    const authInfo: AuthContextType = {
        signWithForm,
        signWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
