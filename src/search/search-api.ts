import { Item } from "../types";

//Mock database
const items: Item[] = [
  {
    title: "Movies",
    content:
      "Star Wars episode II: attack of the clones, Saving private Ryan, Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
  },
  {
    title: "Musicians/Bands",
    content:
      "Britney Spears, Taylor Swift, Dimmu Borgir, Katy Perry, Korky Buchek",
  },
  {
    title: "Brainstorm Brigade",
    content: "Harald, Oriana, Lukas",
  },
];

//returns filtered data based on search term
export const getFiltered = async (filter: string) => {
  console.log(`Get items, searchterm: ${filter}`);
  return items.filter((item) =>
    item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
};
