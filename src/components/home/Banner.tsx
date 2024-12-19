const Banner = () => {
    return (
      <div
        style={{
          backgroundImage: `url('/assets/images/bg-banner.png')`,
          backgroundSize: "cover", // Ensures the image covers the container
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling
          height: "400px", // Adjust as needed
          width: "100%", // Makes it span the full width of the container
        }}
      ></div>
    );
  };
  
  export default Banner;
  