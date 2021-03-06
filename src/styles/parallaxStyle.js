const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1000px",
    minWidth: "100vw",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    top: "-5vh",
    overflow: "scroll"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  }
};

export default parallaxStyle;
