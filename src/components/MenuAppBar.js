import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Link
} from "react-router-dom";
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: 10,
    marginRight: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    backgroundColor: "#ffffff",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [language, setLanguage] = React.useState("en");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <Box display="flex" flexWrap="nowrap" alignItems="center">
              <Typography style={{color:"#FFFFFF"}} variant="h6" className={classes.title} component={Link} to="/">
                      beanBooks
              </Typography>
              <Tabs className={classes.tabs}>
                  <Tab label="App" component={Link} to="/mainapp" />
                  <Tab label="Social" component={Link} to="/social" />
              </Tabs>
            </Box>
          </Box>
          <Box>
            <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                <AccountCircle />
            </IconButton>
          </Box>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              id="demo-simple-select-outlined"
              value={language}
              onChange={handleChange}
              label="Language"
              className={classes.select}
            >
              <MenuItem component={Link} to="/" value="en">English</MenuItem>
              <MenuItem component={Link} to="/home-jp" value="jp">Japanese</MenuItem>
            </Select>
              </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
}