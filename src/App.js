import logo from './logo.svg';
import './App.css';
import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import RightPanel from './components/RightPanel';
import Header from './components/Header';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './components/context/themeContext';
import Contact from './components/contact';

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const [twitter, setTwitter] = useState([]);
  // useEffect(() => {
    // fetch("http://demo9548547.mockable.io/tweets")
  //   fetch("https://sandbox.nextleap.app/page/fetch")
  //     .then(res => res.json())
  //     .then(data => setTwitter(data));
  // }, [twitter]);

  return (
    <div className={`dashboard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`App`}>
        <LeftPanel/>
        <MiddlePanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
