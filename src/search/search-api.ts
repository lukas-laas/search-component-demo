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

export const getFiltered = async (filter: string) => {
  return items.filter((item) =>
    item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
};
