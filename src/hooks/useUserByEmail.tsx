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
  const [userData, setuserData] = useState<User | null>(null);
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
        setuserData(response.data?.data);
      } catch (err: any) {
        setErrors(
          err.response?.data?.message || "An error occurred while fetching user."
        );
      } finally {
        setLoadings(false);
      }
    };

    fetchUser();
  }, [email]);

  return { userData, loadings, errors };
};

export default useUserByEmail;
