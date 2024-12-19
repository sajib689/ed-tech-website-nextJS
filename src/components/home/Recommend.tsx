import React from "react";
import Image from "next/image";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const Recommend = () => {
  const cards = [
    {
      title: "Git and GitHub",
      description: "Learn open-source version control systems",
      image: "/assets/images/git.jpg",
    },
    {
      title: "Flutter",
      description: "Cross-platform mobile app development",
      image: "/assets/images/flutter.jpg",
    },
    {
      title: "MERN Stack",
      description: "Full-stack web application development",
      image: "/assets/images/js.jpg",
    },
    {
      title: "Python",
      description: "Full-stack web application development",
      image: "/assets/images/next.jpg",
    },
  ];

  return (
    <Grid container spacing={4} sx={{ padding: 4, marginTop: '40px' }}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              backgroundColor: "#fff",
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              height: 220, 
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            {/* Image Section with Text Overlay */}
            <Box sx={{ position: "relative", height: 160 }}>
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
              {/* Text Overlay Box */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
                  color: "white",
                  padding: 2,
                }}
              >
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  {card.title}
                </Typography>
              </Box>
            </Box>
            {/* Text Section */}
            <CardContent sx={{ padding: 2, height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", flex: 1 }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Recommend;
