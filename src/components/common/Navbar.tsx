"use client";

import React, { useState, useEffect, useContext } from "react";
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
import Image from "next/image";
import logo from "../../../public/assets/images/logo (3).png";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "@/utlis/Loader";

// Define types for pages and settings
type Page = { name: string; link: string };
type Setting = { name: string; link?: string };

const pages: Page[] = [
  { name: "Home", link: "/" },
  { name: "Course Details", link: "/course_details" },
  { name: "Blog", link: "/blog" },
  { name: "My Classes", link: "/class_list" },
  { name: "About Us", link: "/about-us" },
];

const settings: Setting[] = [
  { name: "Profile", link: "/profile" },
  { name: "Account", link: "/account" },
  { name: "Dashboard", link: "/dashboard" },
  { name: "Logout" }, // Logout handled via handleLogOut
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter(); // Use router for navigation

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Loader/> 
  }

  const { user, logout } = authContext;

  const handleLogOut = async () => {
    await logout();
    router.push("/login"); 
  };

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
        backgroundColor: scrolled ? "#fff" : "transparent",
        boxShadow: scrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
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
              "&:hover": { color: "#21BF73" },
            }}
          >
            <Image src={logo} alt="logo" width={120} height={90} />
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page?.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link href={page?.link} style={{ textDecoration: "none", color: "inherit", }}>
                      {page?.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
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

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.displayName || "User"} src={user.photoURL || "/assets/images/avatar.jpg"} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) =>
                    setting.name === "Logout" ? (
                      <MenuItem key={setting.name} onClick={handleLogOut}>
                        <Typography textAlign="center">{setting.name}</Typography>
                      </MenuItem>
                    ) : (
                      setting.link && (
                        <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">
                            <Link href={setting.link} style={{ textDecoration: "none", color: "inherit" }}>
                              {setting.name}
                            </Link>
                          </Typography>
                        </MenuItem>
                      )
                    )
                  )}
                </Menu>
              </Box>
            ) : (
              <Button
                href="/login"
                variant="contained"
                sx={{
                  background: "#21BF73",
                  color: "#ffffff",
                  px: 2,
                  py: 1,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { background: "#1eaa66" },
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
