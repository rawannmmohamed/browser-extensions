import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";

function App() {
  const getInitialTheme = () => {
    return localStorage.getItem("theme") || "dark";
  };
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.className = theme + "-mode";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Filter />
      <Card />
    </>
  );
}

export default App;
