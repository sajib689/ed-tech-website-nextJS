import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const modules = [
  "Module -1: Welcome Video",
  "Module 0: Orientation. How to get ready for this course",
  "Module 1: Learn and Explore HTML",
  "Module 2: Learn and Explore CSS",
  "Module 3: Git, Source Control, GitHub, and Hosting",
  "Module 4: More about HTML",
  "Module 5: Build a beautiful portfolio website",
  "Module 6: Build your flower shop website",
  "Module 6.5: [Bonus] Pseudo class, elements, position",
  "Module 7: Responsive Website Layout",
  "Module 8: More responsive layout and Responsive portfolio",
  "Module 9: HTML CSS only Landing Page - G3 Architects",
  "Module 10: Optimize images, icon and more CSS",
  "Module 11: Responsive Website Assignment",
  "Module 11.5: [Bonus] UI UX, future strategy about HTML, CSS",
  "Module 12: Introduction to Tailwind",
  "Module 13: Biker Zone with Daisy UI",
  "Module 14: Tea Landing Page with DaisyUI",
  "Module 15: Responsive Landing Page with Framework Assignment",
  "Module 15_5: HTML, CSS, Framework Bonus",
  "Module 16: Introduction to JavaScript",
  "Module 17: Fundamental Concepts Array and conditionals",
  "Module 18: Loop and Practice Problems",
  "Module 19: Core Concepts, functions, and objects",
  "Module 20: Apply JavaScript Concepts",
  "Module 21: JavaScript Simple Coding Problems",
  "Module 22: More JS Coding Problems",
  "Module 23: Assignment",
  "Module 23.5: Basic JavaScript Bonus Module",
  "Module 24: Tour of DOM (Document Object Model)",
  "Module 25: Event, addEventListener, Event bubble",
  "Module 26: Simple Interactive Bank Website (Baap Er Bank)",
  "Module 27: Bank Calculation Using Functions (advanced)",
  "Module 28: DOM manipulation with Geometry Genius",
  "Module 29: Build Summer Sale using DOM manipulation",
  "Module 29.5: Integrate JavaScript Bonus Content",
  "Module 30: JS Recap and Basic ES6, ES5",
  "Module 31: (Advanced) More ES6",
  "Module 32: Understand Common JavaScript Concepts",
  "Module 33: API, JSON, Data load, dynamic website",
  "Module 34: API Recap with Phone Hunter",
  "Module 35: More about JavaScript",
  "Module 36: ES6 and API Related Assignment",
  "Module 36.5: Browser Storage",
  "Module 36.6: [Optional] Browser & Debugging",
  "Module 36.7: [Optional] Introduction to DevTools",
  "Module 37: JavaScript You Need to Know for React",
  "Module 38: React Core Concept (Part 1)",
  "Module 39: React Core Concept (Part 2)",
  "Module 40: Simple React Rest Countries",
  "Module 41: Modules and Data Storage Integration",
  "Module 42: Simple React SPA with Knowledge Cafe",
  "Module 43: React SPA Assignment",
  "Module 43.5: Simple React Bonus",
  "Module 44: Tailwind CSS, Axios, Rechart, Awesome Components",
  "Module 45: React Router Concept",
  "Module 46: React Core Concept (Part 3)",
  "Module 47: CareerHub with Router",
  "Module 48: Assignment 8",
  "Module 48.5: Router Bonus",
  "Module 49: Simple React Firebase Authentication",
  "Module 50: Email Password Authentication, Login Form",
  "Module 51: React Auth Integration and Private Route",
  "Module 52: Build Dragon News Layout",
  "Module 52.5: Authentication with Dragon News",
  "Module 53: React Auth Assignment",
  "Module 53.5: Node.js Bonus Content",
  "Module 54: Getting Started with Node, Express, and API",
  "Module 55: Know More About Node.js, Express.js, MongoDB, and CRUD Operations",
  "Module 56: CRUD with Espresso Emporium Using MongoDB",
  "Module 56.5: Authentication with Espresso Emporium, Deploy & Practice Task",
  "Module 57: Assignment 10",
  "Module 57.5: Bonus Module",
  "Module 58: CRUD Recap with Genius Car",
  "Module 59: Genius Car Node Mongo CRUD Recap",
  "Module 60: Introduction to JWT and Axios Interceptor",
  "Module 60.5: (Important) How to Create Unique Projects and Unique Profile",
  "Module 61: Recap JWT and Interceptor with Genius Car",
  "Module 62: Pagination and Load Data by Filter",
  "Module 63: CRUD with JWT Assignment",
  "Module 63.5: Indexing in MongoDB",
  "Module 64: Final Project Part-1",
  "Module 65: Final Project Part-2",
  "Module 66: Final Project Part-3",
  "Module 67: Final Project Part-4",
  "Module 68: Final Project Part-5",
  "Module 69: Final Project Part-6",
  "Module 70: Final Project Part-7",
  "Module 71: Final Project Part-8",
  "Module 72: The Final Effort",
  "Module 72.5: Email Sending (Bonus)",
  "Module 73: Fundamentals of Next.js",
  "Module 74: Next-Level Data Fetching in Next.js",
  "Module 75: Build a News Portal Website Using Next.js",
  "Module 76: Interview Preparation and Get Ready to Be Hired",
];

const CourseCurriculum = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", paddingTop: "40px" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "85%",
          backgroundColor: "#1a1a2e",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
      "&:hover": {
        backgroundColor: "linear-gradient(to right, #6a11cb, #2575fc)",
      },
            padding: "16px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
          >
            Course Module
          </Typography>
        </Box>
        <Box
          sx={{
            maxHeight: "400px",
            overflowY: "scroll",
            backgroundColor: "#0f0f1b",
            padding: "8px",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#8e44ad",
              borderRadius: "8px",
            },
          }}
        >
          <List>
            {modules.map((module, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "#1c1c30",
                  margin: "4px 0",
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "#2d2d4a",
                  },
                }}
              >
                <ListItemText
                  primary={module}
                  sx={{ color: "#fff", fontSize: "14px" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCurriculum;
