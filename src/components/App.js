import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ShopProvider from "../context/shopContext";
import NavBar from "../components/Navbar";
import Cart from "../components/Cart";
import MainPage from "../pages/Home";
import Artwork from "../pages/Artwork";
import Gallery from "../pages/Gallery";
import Navbar from "../components/Navbar2";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <NavBar />
          <Cart />
          <Switch>
          <Route path="/artwork">
              <Artwork />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/products">
              <HomePage />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
          {/* <Cart />
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/Gallery" exact={true} component={Gallery} />
            <Route path="/Artwork" exact={true} component={Artwork} />
            <Route path="/Products" exact={true} component={HomePage} />
            <Route path="/Product/:id" exact={true} component={ProductPage} />
          </div> */}
        </Router>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
