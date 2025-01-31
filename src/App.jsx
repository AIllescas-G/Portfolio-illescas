import { useEffect, useState } from "react";
import { DrarkMode } from "./componets/DrarkMode";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <div className={`background ${darkMode ? "dark" : ""}`}>
      <DrarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
