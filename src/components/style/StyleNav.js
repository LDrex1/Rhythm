export const styleNav = {
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
  // toolbar: {
  //   width: "60%",
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  item: {},
  link: {
    background: "linear-gradient( #222245 80%, #888888 )",
    borderRadius: "5px",
    padding: "3px 5px",
    paddingBottom: "6px",
    textDecoration: "none",
    color: "whitesmoke",

    "&:hover": {
      background: "none",
      color: "#222222",
    },

    "&::before": {
      position: "absolute",
      content: '" "',
      top: 0,
      left: 0,
      width: "100%",
      height: "0",
      transition: "all 300ms ease-out ",
      background: "linear-gradient(#888888 80%, #222245)",
      color: "#111111",
      zIndex: -1,
      opacity: 0,
    },

    "&:hover::before": {
      height: "100%",
      opacity: 1,
    },
  },
};
