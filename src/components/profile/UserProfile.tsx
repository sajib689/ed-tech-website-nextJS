'use client'

import { AuthContext } from "@/context/AuthProvider";
import useUserByEmail from "@/hooks/useUserByEmail";
import Loader from "@/utlis/Loader";
import { useContext } from "react";

const UserProfile = () => {
    const authContext = useContext(AuthContext)
    if(!authContext){
        <Loader/>
    }
    const {user} = authContext
    const { userData, loadings, errors } = useUserByEmail(user?.email)
    return (
        <div>
            
        </div>
    );
};

export default UserProfile;