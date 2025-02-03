import sun from "../assets/svg/u_sun.svg";
import moon from "../assets/svg/u_moon.svg";
import useTheme from "../hook/useTheme";

export const DarkMode = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="container">
      <label className="switch " onClick={() => setDarkMode(!darkMode)}>
        <svg>
          <rect className="switch-bg" fill={darkMode ? "#2A9D8F" : "#264653"} />
        </svg>
        <div className={`switch-slider ${darkMode ? "dark" : "light"}`}></div>
        <span className={`switch-icon ${darkMode ? "dark" : "light"}`}>
          {darkMode ? (
            <img src={sun} className=" opacity-30" alt="Moon icon" />
          ) : (
            <img src={moon} className=" opacity-30" alt="Moon icon" />
          )}
        </span>
      </label>
    </div>
  );
};
