import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        /* an object is passed here */
        base: `"nav" "main"` /* mobile phone වලට */,
        lg: `"nav nav" "aside main"` /* 1024px laptop වගේ ලොකු screen තියෙන ඒවට. */,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      {/* navigation bar එක */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* show එකෙන් large screen device වලට විතරක් aside grid item එක පේන්න හැදුවෑකි. */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      {/* main area එක */}
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
