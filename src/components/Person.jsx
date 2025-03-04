/* eslint-disable react/prop-types */
import { Card } from "primereact/card";

const Person = ({ userName, nickName }) => {
  nickName = "@" + nickName.replaceAll(" ", "_");

  return (
    <Card className="mx-8 my-3" title={userName}>
      <p>{nickName}</p>
    </Card>
  );
};

export default Person;
