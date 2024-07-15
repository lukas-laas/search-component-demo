import { useEffect, useState } from "react";
import { getFiltered, Search } from "./search";
import { Results } from "./results";
import { Item } from "./types";
import "@picocss/pico";

function App() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Item[] | null>(null);

  //Fetches data on mount and every time state of search is updated
  useEffect(() => {
    getFiltered(search).then((res) => {
      setResults(res);
    });
  }, [search]);

  return (
    <>
      <Search setSearch={setSearch} />
      <Results results={results} />
    </>
  );
}

export default App;
