import { useEffect, useState } from "react";

function LeftPanel() {

    const [sideNav, setSideNav] = useState();
    const [loggedInUser, setLoggedInUser] = useState();

    useEffect(() => {
        fetch("https://sandbox.nextleap.app/page/fetch")
            .then(res => res.json())
            .then(data => setSideNav(data.sideNavigationButtons));
        // .then(data => setLoggedInUser(data.loggedInUser));
    }, [sideNav]);

    return (
        <div className='left-panel'>
            <div className="leftPanelIcons" >
                {sideNav?.map(iconInfo =>
                    <div className="leftPanelIcons">
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <div><img src={iconInfo.icon.url} alt={iconInfo.icon.alt} ></img></div>
                            <div>
                                {iconInfo.buttonText}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* <div className="userprofile">
                    <img src={loggedInUser?.imageData.url}></img>
                        <div></div>
                </div> */}
        </div>)
}

export default LeftPanel;