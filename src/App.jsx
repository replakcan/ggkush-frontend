import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Route, Routes } from "react-router";
import TweetLayout from "./layout/TweetLayout";
import PeopleLayout from "./layout/PeopleLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<TweetLayout />} />
        <Route path="/people" element={<PeopleLayout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
