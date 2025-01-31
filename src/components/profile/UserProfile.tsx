"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import useUserByEmail from "@/hooks/useUserByEmail";
import { useForm } from "react-hook-form";
import { Container, Card, CardContent, TextField, Button, Typography, CircularProgress, Alert } from "@mui/material";

const UserUpdateForm = () => {
    const authContext = useContext(AuthContext);
    const userEmail = authContext?.user?.email || ""; 

    // Fetch user data
    const { userData, loadings, errors } = useUserByEmail(userEmail);

    // React Hook Form
    const { register, handleSubmit, formState: { errors: formErrors }, setValue } = useForm({
        defaultValues: {
            name: userData?.name || "",
            email: userData?.email || "",
            role: userData?.role || "",
        }
    });

    // Handle form submission
    const onSubmit = async (data: any) => {
        console.log("Updated User Data:", data);
        // TODO: Make API request to update user data
    };

    if (loadings) {
        return (
            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress />
            </Container>
        );
    }

    if (errors) {
        return (
            <Container sx={{ mt: 5 }}>
                <Alert severity="error">Error loading user data: {errors}</Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Update Profile
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            label="Name"
                            margin="normal"
                            {...register("name", { required: "Name is required" })}
                            error={!!formErrors.name}
                            helperText={formErrors.name?.message}
                        />
                        
                        <TextField
                            fullWidth
                            label="Email"
                            margin="normal"
                            disabled
                            {...register("email")}
                        />

                        <TextField
                            fullWidth
                            label="Role"
                            margin="normal"
                            {...register("role", { required: "Role is required" })}
                            error={!!formErrors.role}
                            helperText={formErrors.role?.message}
                        />

                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            sx={{ mt: 2, width: "100%" }}
                        >
                            Update Profile
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default UserUpdateForm;
