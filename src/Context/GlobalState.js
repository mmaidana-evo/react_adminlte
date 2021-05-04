import React,{useState} from "react";
import NetContext from "./NetContext"

function GlobalState(props){    
    const [userlogin,setLogin] = useState(sessionStorage.getItem("userlogin"));
    const [username,setUserName] = useState(sessionStorage.getItem("username"));
    
    const loginUser = (p_username) => {
        setLogin(true);
        setUserName(p_username);
        sessionStorage.setItem("userlogin",true);
        sessionStorage.setItem("username",p_username);
    }

    const logoutUser = ()=>{
        setLogin(false);
        sessionStorage.removeItem("userlogin");
        sessionStorage.removeItem("username");
    }
    
    return(
        <NetContext.Provider
            value={{
                userlogin:userlogin,
                username:username,
                loginUser:loginUser,
                logoutUser:logoutUser
            }}
        >
            {props.children}
        </NetContext.Provider>
    )
    
}
export default GlobalState