'use client'

import { useEffect, useState } from "react";

const ClassList = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('http://localhost:3001/classes')
        .then(response => response.json())
        .then(data => {
            setClasses(data);
            setLoading(false);
        });
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ClassList;