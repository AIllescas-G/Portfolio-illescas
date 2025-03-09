import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DarkMode, NavComponent } from "./componets";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Moverick from "./pages/works/Moverick";
import Go from "./pages/works/Go";
import About from "./pages/About";
import Icired from "./pages/works/Icired";
import Subbetica from "./pages/works/Subbetica";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DarkMode />
        <NavComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="illescas" element={<About/>}></Route>
          <Route path="go" element={<Go />}></Route>
          <Route path="Moverick" element={<Moverick />}></Route>
          <Route path="icired" element={<Icired />}></Route>
          <Route path="subbetica" element={<Subbetica />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
} 

export default App;
