import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <PrimeReactProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PrimeReactProvider>
);
