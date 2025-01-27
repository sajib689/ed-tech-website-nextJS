import { CircularProgress } from "@mui/material";


const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <CircularProgress disableShrink />
        </div>
    );
};

export default Loader;