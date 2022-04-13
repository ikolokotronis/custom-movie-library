import {ChakraProvider} from "@chakra-ui/react";
import {Search} from "./components/Search";
import {MovieList} from "./components/MovieList";
import {Layout} from "./components/Layout";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
        <ChakraProvider>
          <Layout>
            <Search/>
            <MovieList/>
          </Layout>
        </ChakraProvider>
      </Provider>
  );
}

export default App;
