type Item = {
  title: string;
  content: string;
};

const items: Item[] = [
  {
    title: "Movies",
    content: "Star Wars episode II: attack of the clones, Saving private Ryan",
  },
  {
    title: "Lorem",
    content: "ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa.",
  },
];

export const getFiltered = async (
  filter: string,
  setResults: { (value: any): void; (arg0: Item[]): void }
) => {
  setResults(
    items.filter((item) => item.title.toLocaleLowerCase().includes(filter))
  );
};
