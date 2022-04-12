import {VStack} from "@chakra-ui/react";
import {Search} from "./components/Search";
import {MovieList} from "./components/MovieList";

function App() {
  return (
      <VStack>
          <Search/>
          <MovieList/>
      </VStack>
  );
}

export default App;
