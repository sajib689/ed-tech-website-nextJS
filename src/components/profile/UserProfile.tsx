import { 
  Box, Drawer, List, ListItem, Avatar, Typography, LinearProgress, 
  ListItemIcon, ListItemText, Card, CardContent, Table, TableHead, 
  TableBody, TableRow, TableCell, IconButton, Grid 
} from "@mui/material";
import { Home, CheckCircle, School, Work, Info, BusinessCenter, Delete } from "@mui/icons-material";

const Dashboard = () => {
  const menuItems = [
    { text: "My Profile", icon: <Home />, completed: true },
    { text: "Additional Info", icon: <Info />, completed: true },
    { text: "Address", icon: <CheckCircle />, completed: true },
    { text: "Education", icon: <School />, completed: true },
    { text: "Job Profile", icon: <Work />, completed: true },
    { text: "Certification", icon: <BusinessCenter />, completed: true },
  ];

  const deviceActivity = [
    { id: 1, platform: "Desktop Application", date: "15-01-2025 12:40 AM" },
    { id: 2, platform: "Desktop Application", date: "15-01-2025 12:15 AM" },
    { id: 3, platform: "Windows 10", date: "08-01-2025 06:41 PM" },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: 'linear-gradient(to right, #6a11cb, #2575fc)', color: "white", padding: "40px 0",marginTop: "100px" }}>
    

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
      <List sx={{ p: 2, textAlign: "center" }}>
          <Avatar src="/profile.jpg" sx={{ width: 80, height: 80, mx: "auto", mb: 1 }} />
          <Typography variant="h6">Md Sajib Hossen</Typography>
          <Typography variant="body2">sajibbabu751@gmail.com</Typography>
          <Typography variant="body2">+8801611970979</Typography>
          <LinearProgress variant="determinate" value={100} sx={{ mt: 2, mb: 2 }} />
        </List>
        {/* Profile Card */}
        <Card sx={{ backgroundColor: "#22183C", color: "#fff", p: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" color="purple">
              My Profile
            </Typography>

            <Table sx={{ mt: 2 }}>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>Full Name</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Md Sajib Hossen</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>Email</TableCell>
                  <TableCell sx={{ color: "#fff" }}>sajibbabu751@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>Student ID</TableCell>
                  <TableCell sx={{ color: "#fff" }}>WEB6-2281</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>Mobile Number</TableCell>
                  <TableCell sx={{ color: "#fff" }}>+8801611970979</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {/* Device Activity Table */}
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, color: "purple" }}>
              Device Activity
            </Typography>

            <Table sx={{ mt: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>Serial</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Platform</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Date</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deviceActivity.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{index + 1}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{item.platform}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{item.date}</TableCell>
                    <TableCell>
                      <IconButton color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Footer */}
        <Box sx={{ backgroundColor: "#100824", color: "#fff", py: 4, mt: 5 }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Office Address</Typography>
              <Typography>Level-4, 34, Awal Centre, Banani, Dhaka</Typography>
              <Typography>Support: web@programming-hero.com</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Useful Links</Typography>
              <Typography>Blog</Typography>
              <Typography>Success</Typography>
              <Typography>About us</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
