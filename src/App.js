import {ChakraProvider} from "@chakra-ui/react";
import {Layout} from "./components/Layout";
import {Provider} from "react-redux";
import store from "./redux/store";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";

function App() {
  return (
      <Provider store={store}>
        <ChakraProvider>
            <HashRouter>
                  <Layout>
                      <Routes>
                          <Route exact path="/" element={<Home/>}/>
                          <Route path={'/movies/:id'}/>
                          <Route path={'/movies/favourites/'}/>
                          <Route path={'/movies/watch-later/'}/>
                      </Routes>
                  </Layout>
            </HashRouter>
        </ChakraProvider>
      </Provider>
  );
}

export default App;
