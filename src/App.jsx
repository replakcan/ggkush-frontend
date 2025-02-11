import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTweets } from "./store/actions/tweetActions";
import { fetchUsers } from "./store/actions/userActions";

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
