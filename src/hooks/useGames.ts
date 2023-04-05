import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

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
//? second arguments is one of the properties of the AXIOS request config object. Sent
//? as a Query String. set params to an object. In this games hook, we are passing the selected
//? genre, as a query string parameter to the useData hook. As part of this lesson,k we had to
//? open up our hook and make it more flexible. Now we can pass query string parameters or
//? request data to our request objects. We also added an array of dependencies, if any of
//? these dependencies changes, our effect hook in the useData.ts will re-run and refresh the
//? data from the server.
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
