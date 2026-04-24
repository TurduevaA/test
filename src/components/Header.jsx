import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const COLORS = {
  dark: "#1A1A1A",
  accent: "#A8C7A1",
  white: "#FFFFFF",
  gray: "#B0B0B0",
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuItems = [
    "Главная",
    "О нас",
    "Услуги",
    "Каталог",
    "Вопросы",
    "Контакты",
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <StyledAppBar position="sticky" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: { xs: "70px", md: "90px" },
            px: { xs: 2, md: 5 },
          }}
        >
          <Logo variant="h5">FB17</Logo>

          <Stack
            direction="row"
            spacing={5}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {menuItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <ContactButton sx={{ display: { xs: "none", sm: "block" } }}>
              Связаться с нами
            </ContactButton>

            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "flex", md: "none" }, color: COLORS.white }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: "250px", bgcolor: COLORS.dark, color: COLORS.white },
        }}
      >
        <List sx={{ pt: 4 }}>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={handleDrawerToggle}>
              <ListItemText
                primary={item}
                sx={{
                  textAlign: "center",
                  ".MuiTypography-root": { fontWeight: 500 },
                }}
              />
            </ListItem>
          ))}
          <Box sx={{ p: 2, textAlign: "center" }}>
            <ContactButton fullWidth>Связаться с нами</ContactButton>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

const StyledAppBar = styled(AppBar)({
  backgroundColor: COLORS.dark,
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
});

const Logo = styled(Typography)({
  fontWeight: 800,
  letterSpacing: "-1px",
  color: COLORS.white,
  cursor: "pointer",
  fontFamily: "'Inter', sans-serif",
});

const NavLink = styled("a")({
  color: COLORS.white,
  textDecoration: "none",
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontWeight: 400,
  opacity: 0.8,
  transition: "all 0.3s ease",
  "&:hover": {
    opacity: 1,
    color: COLORS.accent,
  },
});

const ContactButton = styled(Button)({
  backgroundColor: COLORS.accent,
  color: "#000",
  borderRadius: "0px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: COLORS.white,
    transition: "0.4s",
  },
});

export default Header;
