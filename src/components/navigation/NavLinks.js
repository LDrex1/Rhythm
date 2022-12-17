import {
  Build,
  ConnectWithoutContact,
  Home,
  InfoOutlined,
  QuestionMark,
} from "@mui/icons-material";

const NavLinks = [
  { title: "Home", url: "#", icon: <Home /> },
  { title: "Tech", url: "#", icon: <Build /> },
  { title: "About", url: "#", icon: <InfoOutlined /> },
  { title: "Contact", url: "#", icon: <ConnectWithoutContact /> },
  { title: "Help", url: "#", icon: <QuestionMark /> },
];

export default NavLinks;
