import { Item } from "../types";

type Props = { results: Item[] };

export const Results = ({ results }: Props) => {
  return (
    <ul>
      {results.map((result) => {
        const { title, content } = result;
        return (
          <li key={title}>
            <h3>{title}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
