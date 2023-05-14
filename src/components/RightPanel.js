import { useState, useEffect } from "react";

function RightPanel() {

  const [trendData, setTrendData] = useState();

  //fetching trending data
  useEffect(() => {
    fetch("https://sandbox.nextleap.app/page/fetch")
      .then(res => res.json())
      .then(data => setTrendData(data));
  }, [trendData]);

  return (
    <div className='right-panel'>
      <div style={{ paddingTop: '12px', paddingBottom: '64px' }}>
        <div className="search-div">
          <form action="#" aria-label="Search Twitter" style={{ display: 'flex', flexDirection: 'row' }}>
            <label>
              <div className="search-icon">
                <img>
                </img>
              </div>
              <div className="search-query">
                <input placeholder="Search Twitter" role="combobox" className="search-input"></input>
              </div>
            </label>
          </form>
        </div>
        <div className="timeline">
          <div>
            <h2>{trendData?.trendingData.title}</h2>
          </div>
          <div className="trendingList">
            {trendData?.trendingData.trends.map(trendList =>
              <div className="trendingListSection">
                <div className="trendingListSmall">{trendList.country ? trendList.country : trendList.category}</div>
                <div>{trendList.text}</div>
                <div className="trendingListSmall">{trendList.tweets ? `${trendList.tweets} Tweets` : trendList.hashTags.map((tags => tags))}</div>
              </div>
            )}
          </div>
          <div>
            <div className="showMore"> Show More</div>
          </div>
        </div>
        <div className="usersToFollow">
          <h2>{trendData?.followData.title}</h2>
          {trendData?.followData.usersToFollow.map(usersToFollow =>
            <div className="trendData">
              <img className="trendDataSection" src={usersToFollow.imageData.url} alt={usersToFollow.imageData.alt} width='50px' height="50px"></img>
              <div className="trendUserData">
                <div >
                  <div> {usersToFollow.userName} </div>
                  <div className="trendUserDataSmall"> {usersToFollow.userId} </div>
                </div>
                <div>
                  <button className="followButton">Follow</button>
                </div>
              </div>
            </div>
          )}
          <div>
            <div className="showMore"> Show More</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RightPanel;