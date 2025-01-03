import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import { createContext, ReactNode } from "react";

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
    const authInfo: AuthContextType = {
        user: "Guest",
        login: () => console.log("Logged in"),
        logout: () => console.log("Logged out"),
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
