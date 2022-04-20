import {Layout} from "./components/Layout";
import {Provider} from "react-redux";
import store from "./redux/store";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {SingleMovie} from "./components/SingleMovie";
import {FavouriteMovieList} from "./components/FavouriteMovieList";
import {WatchLaterMovieList} from "./components/WatchLaterMovieList";

function App() {
  return (
      <Provider store={store}>
            <HashRouter>
                  <Layout>
                      <Routes>
                          <Route exact path="/" element={<Home/>}/>
                          <Route path={'/movies/:id/'} element={<SingleMovie/>}/>
                          <Route path={'/movies/favourites/'} element={<FavouriteMovieList/>}/>
                          <Route path={'/movies/watch-later/'} element={<WatchLaterMovieList/>}/>
                      </Routes>
                  </Layout>
            </HashRouter>
      </Provider>
  );
}

export default App;
