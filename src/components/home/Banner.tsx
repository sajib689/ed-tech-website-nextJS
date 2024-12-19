const Banner = () => {
    return (
        <div
        style={{
          backgroundImage: `url('/assets/images/bg-banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "calc(100vh - 64px)", // Subtract Navbar height if necessary
          width: "100%",
          position: "relative",
        }}
      ></div>
    );
  };
  
  export default Banner;
  