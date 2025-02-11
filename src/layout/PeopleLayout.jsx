import { useSelector } from "react-redux";
import Person from "../components/Person";

function PeopleLayout() {
  const people = useSelector((store) => store.user.users);
  console.log(people)

  return (
    <>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            firstName={person.firstName}
            lastName={person.lastName}
            nickName={person.nickName}
            email={person.email}
          />
        );
      })}
    </>
  );
}

export default PeopleLayout;
