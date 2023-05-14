import { useState } from "react";

function TweetInput({addTweet}) {   //addTweet passed as refernce from middlepanel
    const [tweetValue,setTweetValue] = useState('');
    const handleInput = (event) => {
        setTweetValue(event.target.value);
    }
    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            addTweet(tweetValue);
            setTweetValue('');
        }
    }
    return(
        <div>
            {/* {tweetValue} */}
            <input type="text" onChange={handleInput} onKeyDown={handleKeyDown} value={tweetValue} placeholder="What's happening?"
                      className="tweetTextArea"/>
        </div>
    )
}

export default TweetInput;