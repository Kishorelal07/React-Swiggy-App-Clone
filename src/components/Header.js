import { LOGO_URL } from "./utils/constants"

const Header = () =>{
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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart items</li>
            </ul>
        </div>
        </div>
    )
}

export default Header