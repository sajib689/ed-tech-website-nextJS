import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: string;
  role: string;
  name: string;
  email: string;
  password: string;
  number: number;
  create_At?: Date;
}

interface UseUserByEmailResult {
  userData: User | null;
  loadings: boolean;
  errors: string | null;
}

const useUserByEmail = (email: string): UseUserByEmailResult => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loadings, setLoadings] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    if (!email) {
      setErrors("Email is required");
      return;
    }

    const fetchUser = async () => {
      setLoadings(true);
      setErrors(null);

      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/users/${email}`
        );
        setUserData(response.data?.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // Handle Axios-specific error
          setErrors(err.response?.data?.message || "An error occurred while fetching user.");
        } else {
          // Handle non-Axios errors
          setErrors("An unexpected error occurred.");
        }
      } finally {
        setLoadings(false);
      }
    };

    fetchUser();
  }, [email]);

  return { userData, loadings, errors };
};

export default useUserByEmail;
