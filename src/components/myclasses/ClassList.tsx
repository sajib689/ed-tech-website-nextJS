'use client'

import { AuthContext } from "@/context/AuthProvider";
import Loader from "@/utlis/Loader";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const ClassList = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const authContext = useContext(AuthContext);

  if (!authContext || loading) {
    return <Loader/>
  }
  const { user } = authContext;  
    useEffect( () => {
        axios.get(`http://localhost:5000/api/v1/paymenthistory/${user?.email}`)
        .then(res => {
            setClasses(res.data.payment);
            setLoading(false);
            console.log(res.data.payment)
        })
    },[user?.email])
    return (
        <div>
            <h1>{classes.length}</h1>
        </div>
    );
};

export default ClassList;