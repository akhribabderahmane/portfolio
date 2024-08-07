import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter  } from 'react-router-dom';
import {disableReactDevTools} from "@fvilers/disable-react-devtools"

if (import.meta.env.VITE_NODE_ENV==="production") disableReactDevTools()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
