import { useDispatch, useSelector } from "react-redux";
import Person from "../components/Person";
import { fetchPeople } from "../store/actions/tweetActions";
import { useEffect } from "react";

function PeopleLayout() {
  const dispatch = useDispatch()
  const { username, password } = useSelector((store) => store.user.user_auth) 
  const people = useSelector((store) => store.tweet.people);

  useEffect(() => {
      dispatch(fetchPeople(username, password));
    }, [username, password, dispatch]);

  return (
    <>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            userName={person.userName}
            nickName={person.nickName}
          />
        );
      })}
    </>
  );
}

export default PeopleLayout;
