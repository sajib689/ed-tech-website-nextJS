"use client";

import {
  Box,
  List,
  Avatar,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import Loader from "@/utlis/Loader";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Dashboard = () => {
  const [deviceInfo, setDeviceInfo] = useState<any[]>([]); // Keep state as an array

  useEffect(() => {
    const handleDeviceInfo = (data: any) => {
      // Push the received data object into the existing state
      setDeviceInfo((prev) => [...prev, data]);
    };

    socket.on("deviceInfo", handleDeviceInfo);

    return () => {
      socket.off("deviceInfo", handleDeviceInfo);
    };
  }, []);

  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Loader />;
  }

  const { user } = authContext;
  console.log(deviceInfo);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        padding: "40px 0",
        marginTop: "70px",
      }}
    >
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <List sx={{ p: 2, textAlign: "center" }}>
          <Avatar
            src="/profile.jpg"
            sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
          />
          <Typography variant="body2" sx={{ color: "#fff" }}>
            Student Id: WEB6-4243
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            {user?.email}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            {user?.number}
          </Typography>
          {/* Edit Button */}
          <IconButton sx={{ color: "#fff" }}>
            <Edit />
          </IconButton>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{ mt: 2, mb: 2, backgroundColor: "#444" }}
          />
        </List>

        <Card
          sx={{
            p: 3,
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
          }}
        >
          <CardContent>
            {/* Device Activity Table */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mt: 3, color: "#FF6F61" }}
            >
              Device Activity
            </Typography>

            <Table sx={{ mt: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#FF6F61" }}>Serial</TableCell>
                  <TableCell sx={{ color: "#FF6F61" }}>Device</TableCell>
                  <TableCell sx={{ color: "#FF6F61" }}>Platform</TableCell>
                  <TableCell sx={{ color: "#FF6F61" }}>Date</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {deviceInfo?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{index + 1}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      {item?.os.family}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      {item?.device.family || "N/A"}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      {item?.date || "N/A"}
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
