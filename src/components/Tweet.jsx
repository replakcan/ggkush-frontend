/* eslint-disable react/prop-types */
import { Card } from "primereact/card";

const Tweet = ({ text, nickName }) => {
    
  return (
    <Card className="mx-8 my-3" title={nickName}>
      <p className="p-0">{text}</p>
    </Card>
  );
};

export default Tweet;
