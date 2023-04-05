import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //? මේක මෙහෙම උනේ RAWG.IO එක design කරල තියෙන විදියෙ අවුලක් හින්ද,
  //* this is an array of objects, where each object has a property called "platform" of
  //* type Platform.
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
