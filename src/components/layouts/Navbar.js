import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/';


const Navbar = () => {
    const classes = useStyles();
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          {" "}
          Jblack/>{" "}
        </Link>
        <ul className="right hide-on-med-and-down">
          <li className={classes.aesthetic}>
            <NavLink to="/project">Projects</NavLink>
          </li>
          <li className={classes.aesthetic}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={classes.aesthetic}>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

const useStyles = makeStyles(theme => ({
    aesthetic: {
        letterSpacing:"2px",
        color: "#ffff",
        fontWeight: "bolder",   
    }
}));

export default Navbar;
