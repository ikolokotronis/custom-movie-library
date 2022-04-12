import {VStack} from "@chakra-ui/react";
import {Search} from "./components/Search";
import {MovieList} from "./components/MovieList";
import {Layout} from "./components/Layout";

function App() {
  return (
      <Layout>
          <Search/>
          <MovieList/>
      </Layout>
  );
}

export default App;
