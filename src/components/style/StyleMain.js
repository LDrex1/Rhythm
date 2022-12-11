const styleMain = {
  leftContent: {
    grid: { zIndex: "1" },
    header: {
      marginBottom: { xs: 4, md: 0 },
      color: "#222245",
      fontWeight: 400,
      lineHeight: { md: 1.167 },
      letterSpacing: " -0.01563em",
    },
  },
  model: { minHeight: { sm: "60vh", md: "50vh", lg: "70vh" } },
  rightContent: {
    position: "relative",
    minWidth: { xs: "90vw", md: "unset" },
    height: { xs: "50vh", lg: "70vh" },
    border: "1px solid #222222",
    borderRadius: "15px",
    overflow: "hidden",
    // boxShadow: "5px 4px 3px #ffff45",
  },
};

export default styleMain;
