import { LOGO_URL } from "./utils/constants"
import { useState } from "react";
import { Link } from "react-router";

const Header = () =>{
    const [btnName ,setBtnName] = useState("Login");
    return(
        <div className="Header">
            <div className="Logo">
                <img className="LogoContainer" src={LOGO_URL}></img>
            </div>
        <div className="foodHub">
                    <h1>WELCOME TO FOOD HUB</h1>
        </div>
            
        <div className="Nav-items">
            <ul>
                <li>
                    <Link className="LinkTag" to = "/">Home</Link>
                </li>
                <li>
                    <Link className="LinkTag" to = "/About">About</Link>
                </li>
                <li>
                     <Link className="LinkTag" to = "/Contact">Contact Us</Link>
                </li>
                <li>Cart items</li>
            </ul>
        </div>
        <button className="button" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            console.log(btnName);
        }}>
            {btnName}
            </button>
        </div>
    )
}

export default Header