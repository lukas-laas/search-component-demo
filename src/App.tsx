import { useEffect, useState } from "react";
import { getFiltered, Search } from "./search";
import { Results } from "./results";
function App() {
  const [search, setSearch] = useState<string | null>(null);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    getFiltered(search ? search : "").then((res) => {
      console.log(res);
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
