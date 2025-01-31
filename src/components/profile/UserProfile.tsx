"use client";

import { AuthContext } from "@/context/AuthProvider";
import useUserByEmail from "@/hooks/useUserByEmail";
import Loader from "@/utlis/Loader";
import { useContext } from "react";
import { Container, Card, CardContent, Typography, Alert } from "@mui/material";

const UserProfile = () => {
    const authContext = useContext(AuthContext);
    const userEmail = authContext?.user?.email || ""; // Ensure email is always a string

    // Call hooks unconditionally
    const { userData, loadings, errors } = useUserByEmail(userEmail);

    // Handle loading state
    if (!authContext || loadings) {
        return <Loader />;
    }

    // Handle error state
    if (errors) {
        return (
            <Container sx={{ mt: 5 }}>
                <Alert severity="error">Error loading user data: {errors}</Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ mt: '100px' }}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        User Profile
                    </Typography>
                    {userData ? (
                        <>
                            <Typography variant="body1">
                                <strong>Name:</strong> {userData.name}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Email:</strong> {userData.email}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Role:</strong> {userData.role}
                            </Typography>
                        </>
                    ) : (
                        <Alert severity="info">No user data found.</Alert>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
};

export default UserProfile;
