import { useEffect, useState } from "react";
import { getFiltered, Search } from "./search";
import { Results } from "./results";
import { Item } from "./types";
import "@picocss/pico";

function App() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Item[] | null>(null);

  useEffect(() => {
    getFiltered(search).then((res) => {
      setResults(res);
    });
  }, [search]);

  return (
    <>
      <Search setSearch={setSearch}></Search>
      {results && <Results results={results} />}
    </>
  );
}

export default App;
