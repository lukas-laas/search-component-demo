export const Results = ({ results }: { results: any[] }) => {
  return (
    <ul>
      {results.map((result: any) => {
        return (
          <li key={result.title}>
            <h3>{result.title}</h3>
            <p>{result.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
