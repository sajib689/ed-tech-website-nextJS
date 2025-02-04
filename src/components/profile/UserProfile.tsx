'use client'
import {
  Box, List, Avatar, Typography, LinearProgress, Card, CardContent, Table, TableHead,
  TableBody, TableRow, TableCell, IconButton
} from "@mui/material";
import { Home, CheckCircle, School, Work, Info, BusinessCenter, Delete } from "@mui/icons-material";
import Loader from "@/utlis/Loader";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000")
const Dashboard = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);
  
    useEffect( () => {
      const handleDeviceInfo = (data: any) => {
        setDeviceInfo(data);
      };
  
      socket.on("deviceInfo", handleDeviceInfo);
  
      return () => {
        socket.off("deviceInfo", handleDeviceInfo);
      };
    },[])
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Loader/> 
  }

  const { user } = authContext;
  
  const menuItems = [
    { text: "My Profile", icon: <Home />, completed: true },
    { text: "Additional Info", icon: <Info />, completed: true },
    { text: "Address", icon: <CheckCircle />, completed: true },
    { text: "Education", icon: <School />, completed: true },
    { text: "Job Profile", icon: <Work />, completed: true },
    { text: "Certification", icon: <BusinessCenter />, completed: true },
  ];

  const deviceActivity = [
    { id: 1, platform: "Desktop Application", date: "15-01-2025 12:40 AM" },
    { id: 2, platform: "Desktop Application", date: "15-01-2025 12:15 AM" },
    { id: 3, platform: "Windows 10", date: "08-01-2025 06:41 PM" },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh",  padding: "40px 0", marginTop: "70px" }}>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <List sx={{ p: 2, textAlign: "center" }}>
          <Avatar src="/profile.jpg" sx={{ width: 80, height: 80, mx: "auto", mb: 1 }} />
          <Typography variant="body2" sx={{ color: "#fff" }}>Student Id: WEB6-4243</Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>{user?.name}</Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>{user?.email}</Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>{user?.number}</Typography>
          <LinearProgress variant="determinate" value={100} sx={{ mt: 2, mb: 2, backgroundColor: "#444" }} />
        </List>
    
        <Card sx={{ p: 3,  background: 'linear-gradient(to right, #6a11cb, #2575fc)', }}>
          <CardContent>
            {/* Device Activity Table */}
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, color: "#FF6F61" }}>
              Device Activity: {deviceInfo?.userAgent}
            </Typography>

            <Table sx={{ mt: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#FF6F61" }}>Serial</TableCell>
                  <TableCell sx={{ color: "#FF6F61" }}>Platform</TableCell>
                  <TableCell sx={{ color: "#FF6F61" }}>Date</TableCell>
                  <TableCell sx={{ color: "#FF6F61" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deviceActivity.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{index + 1}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{item.platform}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{item.date}</TableCell>
                    <TableCell>
                      <IconButton color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
