import { io } from "socket.io-client";
import { useEffect, useState } from "react";
const useActiveUsers = () => {
    const [activeUsers, setActiveUsers] = useState<number>(0);
    useEffect(() => {
        const socket = io("http://localhost:5000");
        socket.on('activeUsers', (count: number) => {
            setActiveUsers(count);
        });
    }, []);
    return activeUsers;

}

export default useActiveUsers;