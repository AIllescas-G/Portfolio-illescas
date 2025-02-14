import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DarkMode, NavComponent } from "./componets";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Go from "./pages/Go";
import Moverick from "./pages/Moverick";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DarkMode />
        <NavComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="go" element={<Go />}></Route>
          <Route path="Moverick" element={<Moverick />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
} 

export default App;
