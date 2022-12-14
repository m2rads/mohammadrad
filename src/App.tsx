import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import DisplayLottie from "./containers/DisplayLottie";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import PageNotFound from "./components/PageNoteFound";
import AppMenu from "./components/Menu/AppMenu";
import Footer from "./components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, pink, yellow } from "@mui/material/colors";
import "./App.css";
import ProjectDetailsDisplay from "./containers/Project/Details/ProjectDetailsDisplay";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[600],
    },
    secondary: {
      main: yellow[700],
    },
  },
  typography: {
    fontFamily: "Lato",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppMenu />
        <Routes>
          <Route path="/mohammadrad/" element={<Home />}>
            {" "}
          </Route>
          {/* <Route path="/home" element={<Home />}>
            {" "}
          </Route> */}
          <Route path="/mohammadrad/projects" element={<Projects />}>
            {" "}
          </Route>
          <Route path="/projects/:id" element={<ProjectDetailsDisplay />}>
            {" "}
          </Route>
          <Route path="/mohammadrad/blog" element={<Blog />}>
            {" "}
          </Route>
          <Route path="/mohammadrad/about" element={<About />}>
            {" "}
          </Route>
          {/* <Route path="/mohammadrad/resume" element={<Resume />}>
            {" "}
          </Route> */}
          <Route path="/mohammadrad/lottie" element={<DisplayLottie />}>
            {" "}
          </Route>
          <Route path="/mohammadrad/*" element={<PageNotFound />}>
            {" "}
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
