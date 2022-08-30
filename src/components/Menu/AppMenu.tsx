import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import "./Menu.css";

function AppMenu() {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar
        sx={{ justifyContent: "space-between" }}
        id="top"
        className="container"
      >
        <Button
          sx={{ fontSize: "1em" }}
          onClick={() => navigate("/")}
          color="inherit"
        >
          &#60; M2rads &#47; &#62;
        </Button>
        <Box sx={{ textAlign: "right", display: { xs: "flex", md: "none" } }}>
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
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                sx={{ ml: "2em", fontSize: "1em" }}
                color="inherit"
                onClick={() => navigate("/")}
              >
                Home
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                sx={{ ml: "2em", fontSize: "1em" }}
                color="inherit"
                onClick={() => navigate("/projects")}
              >
                Projects
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                sx={{ ml: "2em", fontSize: "1em" }}
                color="inherit"
                onClick={() => navigate("/blog")}
              >
                Wip
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                sx={{ ml: "2em", fontSize: "1em" }}
                color="inherit"
                onClick={() => navigate("/about")}
              >
                About
              </Button>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ textAlign: "right", display: { xs: "none", md: "flex" } }}>
          <Button
            sx={{ ml: "2em", fontSize: "1em" }}
            color="inherit"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            sx={{ ml: "2em", fontSize: "1em" }}
            color="inherit"
            onClick={() => navigate("/projects")}
          >
            Projects
          </Button>
          <Button
            sx={{ ml: "2em", fontSize: "1em" }}
            color="inherit"
            onClick={() => navigate("/blog")}
          >
            Wip
          </Button>
          <Button
            sx={{ ml: "2em", fontSize: "1em" }}
            color="inherit"
            onClick={() => navigate("/about")}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppMenu;
