import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {Link} from 'react-router-dom';
import Group94 from './Group 9454.png'


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        // variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <img src={Group94} alt="Group94" className="ac2"/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
        <Link to="/facility">
          <ListItemText primary="Account" />
        </Link>
        </StyledMenuItem>

        <StyledMenuItem>
        <Link to="/">
          <ListItemText primary="Settings" />
        </Link>
        </StyledMenuItem>

        <StyledMenuItem>
        <Link to="/">
          <ListItemText primary="Help Center" />
        </Link>
        </StyledMenuItem>

        <StyledMenuItem>
        <Link to="/">
          <ListItemText primary="Report a Problem" />
        </Link>
        </StyledMenuItem>

        <StyledMenuItem>
        <Link to="/">
          <ListItemText primary="Terms and Policies" />
        </Link>
        </StyledMenuItem>
       
      </StyledMenu>
    </div>
  );
}
