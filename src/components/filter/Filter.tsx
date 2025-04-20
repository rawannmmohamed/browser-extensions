import "./Filter.css";

type FilterProps = {
  theme: string;
  filter: string;
  setFilter: (value: string) => void;
};

const Filter = ({ theme, filter, setFilter }: FilterProps)=> {
  

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value;
    setFilter(value);
  };

  return (
    <div className="filter">
      <h1>Extensions List</h1>
      <div className="filter-buttons">
        <button
          className={`filter-button ${theme} ${
            filter === "all" ? "active" : ""
          }`}
          value="all"
          onClick={handleClick}
        >
          All
        </button>
        <button
          className={`filter-button ${theme} ${
            filter === "active" ? "active" : ""
          }`}
          value="active"
          onClick={handleClick}
        >
          Active
        </button>
        <button
          className={`filter-button ${theme} ${
            filter === "inactive" ? "active" : ""
          }`}
          value="inactive"
          onClick={handleClick}
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default Filter;
