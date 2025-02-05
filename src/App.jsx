import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DarkMode, NavComponent } from "./componets";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DarkMode />
        <NavComponent />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
} 

export default App;
