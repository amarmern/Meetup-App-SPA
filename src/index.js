import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { FavoritesContextProvider } from "./store/favorites-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </StrictMode>,
  rootElement
);
