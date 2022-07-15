import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";
import { Autocomplete } from "@react-google-maps/api";


const Header = ({setCoordinates}) => {
  const classes = useStyles();

  const [autoComplete, setAutoComplete] = useState(null)
  const onLoad = (autoC)=> setAutoComplete(autoC)

  const onPlaceChanged=()=>{
    const lat = autoComplete.getPlace().geoMetry.location.lat()
    const lng = autoComplete.getPlace().geoMetry.location.lng()

    setCoordinates({lat, lng})
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Adviser
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
