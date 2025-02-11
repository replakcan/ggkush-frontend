import { useSelector } from "react-redux";
import Tweet from "../components/Tweet";

function TweetLayout() {
  const tweets = useSelector((store) => store.tweet.tweets);

  return (
    <>
      {tweets.map((tweet) => {
        const { id, text, user } = tweet;
        return <Tweet key={id} text={text} nickName={user.nickName} />;
      })}
    </>
  );
}

export default TweetLayout;
