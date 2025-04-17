
import "./Header.css";

type HeaderProps = {
  theme: string;
  toggleTheme: () => void;
};

const Header = ({ theme, toggleTheme }: HeaderProps) => {

  return (
    <div className={`header ${theme}-mode`}>
      <img src={"./assets/images/logo.svg"} alt="logo" className="logo"/>
      <button onClick={toggleTheme} className={`switch ${theme}-mode`}>
        <img
          src={
            theme === "dark"
              ? `./assets/images/icon-sun.svg`
              : `./assets/images/icon-moon.svg`
          }
          alt="dark/light mode switch"
          
        />
      </button>
    </div>
  );
};

export default Header;
