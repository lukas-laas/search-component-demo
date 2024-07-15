import { useState } from "react";

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
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};
