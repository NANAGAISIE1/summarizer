import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { inject } from '@vercel/analytics';

import App from "./App";
import { store } from "./services/store";

 
inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
