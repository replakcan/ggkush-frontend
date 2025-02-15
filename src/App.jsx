import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTweets } from "./store/actions/tweetActions";
import { fetchUsers } from "./store/actions/userActions";
import { Route, Routes } from "react-router";
import TweetLayout from "./layout/TweetLayout";
import PeopleLayout from "./layout/PeopleLayout";
import Home from "./pages/Home"
import Login from './pages/Login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<TweetLayout />} />
        <Route path="/people" element={<PeopleLayout />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
