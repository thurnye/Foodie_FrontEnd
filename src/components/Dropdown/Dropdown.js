import React from 'react';
import styles from './Dropdown.module.css';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CustomizedButton from '../CustomizedButton/CustomizedButton';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));




const Dropdown = ({label, isIcon, icon, onClick, menuOptions, disabled}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleMenuCallBack = (option) => {
    onClick(option)
    handleClose()
  }
  

  return(
  <div className={styles.Dropdown}>
    {!isIcon && 
      <CustomizedButton 
        variant="contained" 
        label={label} 
        backgroundColor={'#D1420D'} 
        endIcon={<KeyboardArrowDownIcon />} 
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
      />
      // <Button
      //   id="demo-customized-button"
      //   aria-controls={open ? 'demo-customized-menu' : undefined}
      //   aria-haspopup="true"
      //   aria-expanded={open ? 'true' : undefined}
      //   variant="contained"
      //   disableElevation
      //   onClick={handleClick}
      //   endIcon={<KeyboardArrowDownIcon />}
      // >
      //   {label}
      // </Button>
    }

    {isIcon && icon &&
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        { icon ? icon : <MoreVertIcon />}
      </IconButton>
    }
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuOptions.map((option, index) => (
          <MenuItem 
          key={index} 
          onClick={() => handleMenuCallBack(option)} 
          disabled={option.disabled}
          disableRipple>

            {option.icon && 
             <ListItemIcon sx={{ backgroundColor: option?.background, color: option?.color, p: 0.8, mr: 1}}>
              {option.icon}
            </ListItemIcon>
            }
            
            <ListItemText>{option.label}</ListItemText>
          </MenuItem>
        ))}
      </StyledMenu>
  </div>
)};

export default Dropdown;
