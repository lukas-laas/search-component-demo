import { useState } from "react";

function App() {
  const [search, setSearch] = useState<string | null>(null);

  return (
    <>
      <form action="">
        <input type="text" />
        <button>Search</button>
      </form>
      <ul>
        <li>
          <h3>Title</h3>
          <p>Content</p>
        </li>
      </ul>
    </>
  );
}

export default App;
