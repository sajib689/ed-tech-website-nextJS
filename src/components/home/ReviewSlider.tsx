"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import dynamic from "next/dynamic";

// Dynamically import Slider with ssr: false to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Static review data
const people = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

const ReviewSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ backgroundColor: "#21BF73", padding: "40px", color: "white", marginTop: '40px' }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "40px",marginTop: '25px' }}
      >
        What Does the Learner Community Think?
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{ display: "flex", alignItems: "center" }}
      >
        {/* Left Side: Text */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" sx={{ color: "white" }}>
            What is the Learner Community Saying?
          </Typography>
          <Typography component="p" sx={{ color: "white", marginTop: "12px" }}>
            Features testimonials from learners sharing how the <br /> course
            helped them improve their skills and prepare <br /> for real-world
            challenges.
          </Typography>
        </Grid>

        {/* Right Side: Slider */}
        <Grid item xs={12} sm={6}>
          <Slider {...settings}>
            {people.map((review, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Avatar
                  src={review.image || "/default-avatar.png"}
                  alt={review.name}
                  sx={{
                    width: "150px",
                    height: "150px",
                    border: "3px solid white",
                    margin: "0 auto",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                />
                <Box sx={{ color: "white" }}>
                  <Typography variant="h5">{review.name}</Typography>
                  <Typography variant="body1">{review.job}</Typography>
                  <Typography variant="body2">{review.text}</Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
};

export { ReviewSlider };
