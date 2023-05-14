import TweetList from "./TweetList";
import Counter from "./Counter";
import TweetInput from "./TweetInput";
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";

function MiddlePanel() {

    const [tweets, setTweets] = useState([]);
    // const [tweetCount, setTweetCount] = useState(0);
    // const [ width, setWidth ] = useState();

  //fetching tweet threads 
  useEffect(() => {
    fetch("https://sandbox.nextleap.app/page/fetch")
      .then(res => res.json())
      .then(data => setTweets(data.tweetThreads));
  }, [tweets]);

    // const tweetDetail = {
    //     userImage: '',
    //     name: '',
    //     userName: '',
    //     date: '',
    //     description: '',
    //     image: ''
    // }
    // const [tweets, setTweets] = useState([{
    //     userImage: 'https://assets.nextleap.app/images/iphone-image.webp',
    //     name: 'Prachee Gidh',
    //     userName: '@prachee_gidh',
    //     date: 'Jan 20',
    //     description: 'ABFRL to acquire 51% stake in TCNS Clothing, the cos will be amalgamated under the merger scheme. ET Now first broke the story on November 16',
    //     image: 'https://pbs.twimg.com/media/FvayNRmaMAA9V_7?format=jpg&name=900x900'
    // },
    // {
    //     userImage: 'https://assets.nextleap.app/images/iphone-image.webp',
    //     name: 'Prachee Gidh',
    //     userName: '@prachee_gidh',
    //     date: 'Jan 20',
    //     description: 'ABFRL to acquire 51% stake in TCNS Clothing, the cos will be amalgamated under the merger scheme. ET Now first broke the story on November 16',
    //     image: 'https://pbs.twimg.com/media/FvayNRmaMAA9V_7?format=jpg&name=900x900'
    // },
    // {
    //     userImage: 'https://assets.nextleap.app/images/iphone-image.webp',
    //     name: 'Prachee Gidh',
    //     userName: '@prachee_gidh',
    //     date: 'Jan 20',
    //     description: 'ABFRL to acquire 51% stake in TCNS Clothing, the cos will be amalgamated under the merger scheme. ET Now first broke the story on November 16',
    //     image: 'https://pbs.twimg.com/media/FvayNRmaMAA9V_7?format=jpg&name=900x900'
    // },
    // {
    //     userImage: 'https://assets.nextleap.app/images/iphone-image.webp',
    //     name: 'Prachee Gidh',
    //     userName: '@prachee_gidh',
    //     date: 'Jan 20',
    //     description: 'ABFRL to acquire 51% stake in TCNS Clothing, the cos will be amalgamated under the merger scheme. ET Now first broke the story on November 16',
    //     image: 'https://pbs.twimg.com/media/FvayNRmaMAA9V_7?format=jpg&name=900x900'
    // }  ,
    // {
    //     userImage: 'https://assets.nextleap.app/images/iphone-image.webp',
    //     name: 'Prachee Gidh',
    //     userName: '@prachee_gidh',
    //     date: 'Jan 20',
    //     description: 'ABFRL to acquire 51% stake in TCNS Clothing, the cos will be amalgamated under the merger scheme. ET Now first broke the story on November 16',
    //     image: 'https://pbs.twimg.com/media/FvayNRmaMAA9V_7?format=jpg&name=900x900'
    // }      
    // ]);

    const addNewTweet = useCallback((description) => {
        const newTweet = {
            userImage: 'https://assets.nextleap.app/images/iphone-image.webp',
            name: 'Prachee Gidh',
            userName: '@prachee_gidh',
            date: 'Jan 20',
            description: description,
            image: 'https://pbs.twimg.com/media/FvayNRmaMAA9V_7?format=jpg&name=900x900'
        };
        //tweets.push(newTweet);
        setTweets([newTweet, ...tweets]); /// for react to understand that there is state change
    },[tweets]);

    return (
        <div className='middle-panel'>
            <div className="home">
                <h2>
                    <span className="h2"> Home</span>
                </h2>
            </div>
            <div className="tabList">
                <div className="presentation">
                    <a href="/" className="forYouLink">
                        <div className="forYou">
                            <span className="forYouSpan">For you</span>
                            <div className="underline" />
                        </div>
                    </a>
                </div>
                <div className="presentation">
                    <a href="/" className="forYouLink">
                        <div className="forYou">
                            <span className="forYouSpan">Following</span>

                        </div>
                    </a>
                </div>
            </div>
            <div className="tweetSection">
                <div className="tweetSubSection" style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: '4px', marginRight: '12px', display: 'flex' }}>
                            <div className="avatar">
                                <div className="img">
                                    <img src='https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG' style={{ width: '50px', height: '50px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingTop: '4px' }}>
                            <div style={{ paddingTop: '12px', display: 'flex' }}>
                                <label>
                                    <div style={{ color: '#71767B' }}>
                                        <TweetInput addTweet={addNewTweet} />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tweetButtonDiv">
                    <button className="tweetButton">
                        Tweet
                    </button>
                </div>
            </div>
            
            <TweetList data={tweets} />
        </div>
    )
}

export default MiddlePanel;