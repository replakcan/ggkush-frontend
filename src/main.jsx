import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Route, Routes } from "react-router";
import PeopleLayout from "./layout/PeopleLayout.jsx";

createRoot(document.getElementById("root")).render(
  <PrimeReactProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/people" element={<PeopleLayout />}/>

            <Route path="/" element={<App />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </PrimeReactProvider>
);
