import { useState } from "react";
import "./search.css";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = ({ setSearch }: Props) => {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(input);
      }}
    >
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button className="submit-button" type="submit">
        Search
      </button>
    </form>
  );
};
