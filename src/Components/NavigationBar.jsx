/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch } from "react-redux";
import { switchLanguageAction } from "../Redux/actions";

export default function NavigationBar() {
  const languagePack = {
    Russian: {
      aboutUs: "О Нас",
      Prices: "Цены",
      Contacts: "Контакты",
      callNow: "Позвоните нам",
    },
    Tajik: {
      aboutUs: "Дар бораи Мо",
      Prices: "Нарххо",
      Contacts: "Тамос",
      callNow: "Ба мо занг занед",
    },
    English: {
      aboutUs: "About Us",
      Prices: "Prices",
      Contacts: "Contact Us",
      callNow: "Call us",
    },
  };
  const dispatch = useDispatch();
  const [language, setLanguage] = useState("Russian");

  const settings = ["English", "Russian", "Tajik"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    dispatch(switchLanguageAction(language));
  }, [language]);
  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/logo.png" alt="" className="logoNavbar" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",

              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} className="navbar_items">
                <a href="#whatIs">
                  {" "}
                  <Typography textAlign="center">
                    {languagePack[language].aboutUs}
                  </Typography>
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className="navbar_items">
                <a href="#pricing">
                  {" "}
                  <Typography textAlign="center">
                    {languagePack[language].Prices}
                  </Typography>
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className="navbar_items">
                <a href="#footer">
                  <Typography textAlign="center">
                    {languagePack[language].Contacts}
                  </Typography>
                </a>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              className="navbar_items"
              href="#whatIs"
              sx={{ my: 2, display: "block" }}
            >
              {languagePack[language].aboutUs}
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              className="navbar_items"
              href="#pricing"
              sx={{ my: 2, display: "block" }}
            >
              {languagePack[language].Prices}
            </Button>{" "}
            <Button
              onClick={handleCloseNavMenu}
              href="#footer"
              className="navbar_items"
              sx={{ my: 2, display: "block" }}
            >
              {languagePack[language].Contacts}
            </Button>
          </Box>

          <Box sx={{ mr: 1 }}>
            <a href="tel:+992982700005">
              {languagePack[language].callNow}: +992982700005
            </a>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LanguageIcon />
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
                <MenuItem
                  key={setting}
                  onClick={() => {
                    setLanguage(setting);
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
