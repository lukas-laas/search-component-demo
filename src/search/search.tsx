import { useState } from "react";

export const Search = ({
  setSearch,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(input);
      }}
    >
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};
