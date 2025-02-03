
import { DarkMode, NavComponent } from "./componets";
import { ThemeProvider } from "./context/ThemeContext";



function App() {
  return (
    <ThemeProvider>
      <DarkMode />
      <NavComponent/>
    </ThemeProvider>
  
  );
}

export default App;
