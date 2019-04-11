import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  aspectRatioByHeightDiv: {
    display: "inline-block"
  },
  img: {
    display:"inline-block",
    height: "100%",
    visibility: "hidden"
  },
  innerDiv: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left : 0
  }
}

const AspectRatioByHeightDiv = ({children, classes, className, ratioHeight, ratioWidth}) => {
  return (
    <div className = {`${classes.aspectRatioByHeightDiv} ${className}`}>
      <img className={classes.img} src={`data:image/svg+xml;utf8,<svg width="${ratioWidth}" height="${ratioHeight}" viewBox="0 0 ${ratioWidth} ${ratioHeight}" xmlns="http://www.w3.org/2000/svg"></svg>`} alt = "contentless img for layout purposes"/>
      <div className = {classes.innerDiv}>
        {children}
      </div>
    </div>
  )
}

export default withStyles(styles)(AspectRatioByHeightDiv);