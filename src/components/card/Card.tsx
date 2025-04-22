import { useEffect, useState } from "react";
import "./Card.css";

type Extension = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

const Card = ({ filter, theme }: { filter: string; theme: string }) => {
  const [extensions, setExtensions] = useState<Extension[]>([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setExtensions(data))
      .catch((err) => console.error("Failed to load extensions:", err));
  }, []);

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "all") return true;
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true;
  });

  function handleRemove(name: string) {
    return setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  }

  return (
    <div className="cards">
      {filteredExtensions.map((extension, index) => (
        <div key={index} className={`card ${theme}`}>
          <div className="extension">
            <img
              src={extension.logo}
              alt={`${extension.name} logo`}
              className="extension-logo"
            />
            <div>
              <div className={`name ${theme}`}>{extension.name}</div>
              <div className={`description ${theme}`}>
                {extension.description}
              </div>
            </div>
          </div>
          <div className="controls">
            <button
              className={`remove ${theme}`}
              onClick={() => handleRemove(extension.name)}
            >
              Remove
            </button>

            <label className="switch-mode">
              <input type="checkbox" checked={extension.isActive} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
