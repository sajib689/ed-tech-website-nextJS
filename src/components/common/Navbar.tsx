"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import logo from '../../../public/assets/images/logo (3).png'
const pages = [
  { name: "Home", link: "/" },
  { name: "Course Details", link: "/course-details" },
  { name: "Blog", link: "/blog" },
  { name: "My Classes", link: "/my-classes" },
  { name: "About Us", link: "/about-us" },
];
const settings = [
  { name: "Profile", link: "/profile" },
  { name: "Account", link: "/account" },
  { name: "Dashboard", link: "/dashboard" },
  { name: "Logout", link: "/logout" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "#fff" : "transparent", // White when scrolled
        boxShadow: scrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none", // Add shadow when scrolled
        transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Smooth transition
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".3rem",
              color: "rgba(0, 0, 0, 0.55)",
              textDecoration: "none",
              "&:hover": {
                color: "#21BF73",
              },
            }}
          >
             <Image
             src={logo}
              alt='logo'
              width={120}
              height={90}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={page.link} style={{ textDecoration: "none", color: "inherit" }}>
                      {page.name}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "rgba(0, 0, 0, 0.7)", // Text color based on scroll
              textDecoration: "none",
            }}
          >
             <Image
             src={logo}
              alt='logo'
              width={120}
              height={90}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: "center", display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
              <Button
                key={page.name}
                href={page.link}
                sx={{
                  my: 2,
                  color: "rgba(0, 0, 0, 0.55)",
                  display: "block",
                  fontWeight: 700,
                  "&:hover": { color: "#21BF73" },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/assets/images/avater.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <a href={setting.link} style={{ textDecoration: "none", color: "inherit" }}>
                      {setting.name}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
