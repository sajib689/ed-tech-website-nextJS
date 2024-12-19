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
    <Box sx={{ padding: 4,marginTop: '40px' }}>
      {/* Section Title */}
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'left', fontWeight: '600', color: 'rgba(0, 0, 0, 0.55)' }}>
        Recommend
      </Typography>

      <Grid container spacing={4} sx={{  }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: "#fff",
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Flex Layout for Image and Text */}
              <Box sx={{ display: "flex", height: 150 }}>
                {/* Image Section */}
                <Box sx={{ position: "relative", width: 120 }}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                {/* Text Section */}
                <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Recommend;
