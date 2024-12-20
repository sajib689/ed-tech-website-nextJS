import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const WhyLearnProgramming = () => {
  const listItems = [
    'Industry Standard Learning',
    'Hands-On Guidelines',
    'Data-Driven Learning Material',
    'Community Contribution and Support',
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', padding: 4, backgroundColor: '#f9f9f9', marginTop: '40px' }}>
      {/* Left Section - List */}
      <Box sx={{ flex: 1, paddingRight: 2 }}>
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#21BF73' }} />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right Section - Text */}
      <Box sx={{ flex: 1, paddingLeft: 2 }}>
        <Typography variant="h5" sx={{ marginBottom: 2, color: '#21BF73' }}>
          Be Prepared for a New Era of Learning
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          In today&apos;s digital age, programming is one of the most essential skills. Without programming, it&apos;s impossible
          to develop websites, apps, or smart solutions. A strong foundation in this skill can open many doors for you,
          from creating mobile apps to web applications or even a career in AI.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          This section introduces how to become an expert programmer and emphasizes building problem-solving skills,
          teamwork, and a forward-looking mindset.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#21BF73', '&:hover': { backgroundColor: '#1e9b60' } }}>
          Learn More...
        </Button>
      </Box>
    </Box>
  );
};

export default WhyLearnProgramming;
