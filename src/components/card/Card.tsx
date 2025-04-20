import "./Card.css";

const Card = ({ filter, theme }: { filter: string; theme: string }) => {
  return (
    <div className="cards">
      <div className={`card ${theme}`}>
        <div className="extension">
          <img
            src="./assets/images/logo-devlens.svg"
            alt="extension logo"
            className="extension-logo"
          />
          <div>
            <div className={`name ${theme}`}>DevLens</div>
            <div className={`description ${theme}`}>
              Quickly inspect page layouts and visualize element boundaries.
            </div>
          </div>
        </div>
        <div className="controls">
          <button className={`remove ${theme}`}>Remove</button>
          <button className="switch-mode">switch</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
