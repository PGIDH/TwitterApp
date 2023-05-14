// import { useState, useEffect } from "react";
import Tweet from "./Tweet";

function TweetList(props) {
   // or use function TweetList({tweets}) {    <- destructuring

   // const [tweetData, setTweetData] = useState({});

   // useEffect(() => {
   //    if (props)
   //       setTweetData(props);
   // }, [tweetData]);

   return (
      <div className="tweetList">
         {props?.data.map((tweet) => (
            <Tweet data={tweet} />
         ))}
      </div>
   )
}
export default TweetList;