'use client'

import { AuthContext } from "@/context/AuthProvider";
import Loader from "@/utlis/Loader";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const ClassList = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Loader/>
  }
  
  const { user, logout } = authContext;
    

    useEffect( () => {
        axios.get(`http://localhost:5000/api/v1/paymenthistory/${user?.email}`)
        .then(res => {
            setClasses(res.data);
            setLoading(false);
            console.log(res.data)
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ClassList;