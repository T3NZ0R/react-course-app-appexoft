import './App.css';
import Layout from "./Components/Layout/Layout";
import {Outlet} from "react-router-dom";
import {createContext, useState} from "react";

export const ThemeContext = createContext(null)



function App() {

    const [theme, setTheme] = useState("light");

    // const theme = useRef("light");


    const toggleTheme = ()=>{
        if(theme === "light"){
            // theme.current = "dark";
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }else {
            // theme.current = "light";
            setTheme("light");
            document.documentElement.setAttribute("data-theme", "light");
        }
    }


    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Layout>
                <Outlet/>
            </Layout>
        </ThemeContext.Provider>
    );
}

export default App;
