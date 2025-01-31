import './index.css'


export const DrarkMode = ({darkMode, setDarkMode}) => {
  

  return (
   
      <label className="switch" onClick={() => setDarkMode(!darkMode)}>
        <svg>
          <rect className="switch-bg" fill={darkMode ? "#2A9D8F" :  "#264653"} />
        </svg>
        <div className={`switch-slider ${darkMode ? "dark" : "light"}`}></div>
        <span className={`switch-icon ${darkMode ? "dark" : "light"}`}>
          {darkMode ?  <span className=' opacity-30' >☀️</span> : <span className=' opacity-30'>🌙</span>}
        </span>
      </label>
   
  );
};
