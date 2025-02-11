/* eslint-disable react/prop-types */
import { Card } from "primereact/card";

const Person = ({ firstName, lastName, nickName, email }) => {
  const fullName = `${firstName} ${lastName}`;
  nickName = "@" + nickName.replaceAll(" ", "_");

  return (
    <Card className="mx-8 my-3" title={fullName}>
      <p>{nickName}</p>
      <p className="p-0">{email}</p>
    </Card>
  );
};

export default Person;
