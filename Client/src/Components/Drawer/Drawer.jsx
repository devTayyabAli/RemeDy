import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../Assets/images/logo.png";
import "./Drawer.css";
import { MenuShow } from "./MenuData";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import { ExpandMore } from "@mui/icons-material";
import { ExpandLess } from "@mui/icons-material";
import Information_Collection from "../../Pages/Information_Collection";
import Personal_Collection from "../../Pages/Personal_Collection/Personal_Collection";
import { CiSearch } from "react-icons/ci";
import Avatar from "@mui/material/Avatar";
import AvtarLogo from "../../Assets/images/Avtar.png";
import { useDispatch, useSelector } from "react-redux";
import { UpdateAuth } from "../../Redux/AuthSlice";

const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isCloppse, setisCloppse] = React.useState(false);
  const userName = useSelector((state) => state.Auth.userName);
  const jwt = useSelector((state) => state.Auth.jwt_token);
  const loaction = useLocation();
  const dispatch = useDispatch();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const containerStyle = (text) => {
    return {
      backgroundColor: loaction.pathname == text?.path ? "#fff" : "",
      color: loaction.pathname == text?.path ? "#0b2558" : "#fff",
      borderTopLeftRadius: loaction.pathname == text?.path ? "25px" : "0px",
      borderBottomLeftRadius: loaction.pathname == text?.path ? "25px" : "0px",
    };
  };
  const handleHover = () => {
    containerStyle.backgroundColor = "#fff";
    containerStyle.color = "#0b2558";
    containerStyle.borderTopLeftRadius = "25px";
    containerStyle.borderBottomLeftRadius = "25px";
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="pt-2">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#0b2558" }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex justify-end md:justify-between items-center w-100">
            <label class="relative block md:flex items-center hidden">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2 pb-1">
                <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <CiSearch className="text-slate-400" />
                </svg>
              </span>
              <input
                class=" placeholder:text-slate-400 block bg-white w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                placeholder="Search"
                type="text"
                name="search"
              />
            </label>
            <div className="flex  items-center">
              <Avatar variant="rounded" alt="Remy Sharp" src={AvtarLogo} />
              <p className="text-base ml-2 text-[#1B1B1B] ">
                {userName || "Jonathan"}
              </p>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          padding: "15px",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <div className="w-100 flex justify-start p-[23px] ">
            <img src={logo} alt="" width="70%" />
          </div>

          <List style={{ marginTop: "1rem" }}>
            {MenuShow.map((text, index) => (
              <>
                {text?.subNav ? (
                  <>
                    <ListItem
                      disablePadding
                      onClick={() => setisCloppse(!isCloppse)}
                    >
                      <ListItemButton className="listItems">
                        <ListItemIcon>{text.icon}</ListItemIcon>
                        <ListItemText primary={text?.title} />
                        {isCloppse ? (
                          <>
                            <ExpandLess />
                          </>
                        ) : (
                          <>
                            <ExpandMore />
                          </>
                        )}
                      </ListItemButton>
                    </ListItem>
                    <Collapse in={isCloppse} timeout="auto" unmountOnExit>
                      <List>
                        {text?.subNav?.map((text, index) => (
                          <Link to={text?.path}>
                            <ListItem
                              key={text}
                              disablePadding
                              onClick={() => (
                                setisCloppse(!isCloppse), handleDrawerToggle()
                              )}
                              style={containerStyle(text)}
                            >
                              <ListItemButton className="listItems">
                                <ListItemIcon>
                                  {" "}
                                  <span
                                    style={{
                                      color:
                                        loaction.pathname == text?.path
                                          ? "#0b2558"
                                          : "#fff",
                                    }}
                                  >
                                    {text.icon}
                                  </span>
                                </ListItemIcon>
                                <ListItemText primary={text?.title} />
                              </ListItemButton>
                            </ListItem>
                          </Link>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <>
                    <Link to={text?.path}>
                      <ListItem
                        key={text}
                        disablePadding
                        onClick={handleDrawerToggle}
                        style={containerStyle(text)}
                      >
                        <ListItemButton className="listItems">
                          <ListItemIcon>
                            {" "}
                            <span
                              style={{
                                color:
                                  loaction.pathname == text?.path
                                    ? "#0b2558"
                                    : "#fff",
                              }}
                            >
                              {text.icon}
                            </span>
                          </ListItemIcon>
                          <ListItemText primary={text?.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </>
                )}
              </>
            ))}
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            backgroundColor: "#0B2558",
          }}
          open
        >
          <div className="w-100 flex justify-start p-[23px] ">
            <img src={logo} alt="" width="70%" />
          </div>
          {/* <Divider /> */}
          <List style={{ marginTop: "1rem" }}>
            {MenuShow.map((text, index) => (
              <>
                {text?.subNav ? (
                  <>
                    <ListItem
                      disablePadding
                      onClick={() => setisCloppse(!isCloppse)}
                    >
                      <ListItemButton className="listItems">
                        <ListItemIcon>{text.icon}</ListItemIcon>
                        <ListItemText primary={text?.title} />
                        {isCloppse ? (
                          <>
                            <ExpandLess />
                          </>
                        ) : (
                          <>
                            <ExpandMore />
                          </>
                        )}
                      </ListItemButton>
                    </ListItem>
                    <Collapse in={isCloppse} timeout="auto" unmountOnExit>
                      <List>
                        {text?.subNav?.map((text, index) => (
                          <Link to={text?.path}>
                            <ListItem
                              key={text}
                              disablePadding
                              onClick={() => setisCloppse(!isCloppse)}
                              style={containerStyle(text)}
                            >
                              <ListItemButton className="listItems">
                                <ListItemIcon>
                                  {" "}
                                  <span
                                    style={{
                                      color:
                                        loaction.pathname == text?.path
                                          ? "#0b2558"
                                          : "#fff",
                                    }}
                                  >
                                    {text.icon}
                                  </span>
                                </ListItemIcon>
                                <ListItemText primary={text?.title} />
                              </ListItemButton>
                            </ListItem>
                          </Link>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <>
                    <Link
                      to={text?.path}
                      onClick={() =>
                        text?.title == "Logout"
                          ? dispatch(
                              UpdateAuth({
                                isAuth: false,
                                userName: "",
                                jwt_token: "",
                              })
                            )
                          : setisCloppse(false)
                      }
                    >
                      <ListItem
                        key={text}
                        disablePadding
                        style={containerStyle(text)}
                        onMouseOver={handleHover}
                      >
                        <ListItemButton className="listItems">
                          <ListItemIcon>
                            <span
                              style={{
                                color:
                                  loaction.pathname == text?.path
                                    ? "#0b2558"
                                    : "#fff",
                              }}
                            >
                              {text.icon}
                            </span>
                          </ListItemIcon>
                          <ListItemText primary={text?.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </>
                )}
              </>
            ))}
          </List>

          <div>{/* <Toolbar /> */}</div>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "eff3fd",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Information_Collection />} />
          <Route
            path="/Personal_Collection"
            element={<Personal_Collection />}
          />
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
