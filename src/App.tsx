import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        /* an object is passed here */
        base: `"nav" "main"` /* mobile phone වලට */,
        lg: `"nav nav" "aside main"` /* 1024px laptop වගේ ලොකු screen තියෙන ඒවට. */,
      }}
    >
      {/* navigation bar එක */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* show එකෙන් large screen device වලට විතරක් aside grid item එක පේන්න හැදුවෑකි. */}
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      {/* main area එක */}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
