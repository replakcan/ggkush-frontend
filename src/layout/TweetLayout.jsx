import { useDispatch, useSelector } from "react-redux";
import Tweet from "../components/Tweet";
import { fetchTweets } from "../store/actions/tweetActions";
import { useEffect } from "react";

function TweetLayout() {
  const dispatch = useDispatch();
  const { username, password } = useSelector((store) => store.user.user_auth);
  const tweets = useSelector((store) => store.tweet.tweets);

  useEffect(() => {
    dispatch(fetchTweets(username, password));
  }, [dispatch, username, password]);

  return (
    <>
      {tweets.map((tweet) => {
        const { id, text, nickName } = tweet;
        return <Tweet key={id} text={text} nickName={nickName} />;
      })}
    </>
  );
}

export default TweetLayout;
