import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset",
  },
  justifyContentCenter:{
    display: "flex",
    justifyContent: "center"
  }
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children,justifyContentCenter, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + "" + justifyContentCenter && classes.justifyContentCenter}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node,
  justifyContentCenter : PropTypes.bool
};
