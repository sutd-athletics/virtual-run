import { cardTitle, title } from "./coreStyles.js";
import imagesStyle from "./imagesStyles.js";

const teamStyle = {
  section: {
    padding: "5vh 5vw",
    textAlign: "center",
    backgroundColor: "transparent",
    justify: 'center',
    position: 'relative',
    
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  title2: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "white"
  },
  description2: {
    color: "white",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "auto",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999",
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  card: {
    // minHeight: '70vh',
    height: "50vh"
  },
  background: {
    minWidth: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center',
    position: 'fixed',
  },
  head: {
    backgroundColor: '#e53e3e',
    
  },
  cardBody: {
    height: '100%',
  }
};

export default teamStyle;
