import { useEffect, useState } from "react";
import { getFiltered } from "./search";
function App() {
  const [search, setSearch] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [results, setResults] = useState<any>(null);
  useEffect(() => {
    getFiltered(search ? search : "", setResults);
  }, [search]);

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(input);
        }}
      >
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results &&
          results.map((result) => {
            return (
              <li key={result.title}>
                <h3>{result.title}</h3>
                <p>{result.content}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
