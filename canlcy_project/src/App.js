import { Route ,Router, Switch } from "react-router-dom";
import Home from "./Pages/Home";

import Navbar from "./components/Navbar";
import { Links } from "./util/consts";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>  
        {Links.filter((Link) => Link.text !== "Home").map((Link) => {
          const { id, url, page } = Link;
          return (
            <Route path={url} key={id}>
              {page}
            </Route>
          );
        })}
      </Switch>
    </>
  );
}

export default App;
