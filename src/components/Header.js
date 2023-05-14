import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

const headerStyle = {
    width: '100%',
    display: 'flex',
    height:'60px',
}


function Header() {
    const { isDarkMode , toggleTheme } = useContext( ThemeContext );
    return(
        <div>
            <input type="checkbox" onChange={toggleTheme} />
            DarkMode ({isDarkMode ? 'No' : 'Yes'});
        </div>
    )
}

export default Header;