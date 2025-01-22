import { useState,useEffect } from "react"
import ResturantCard from "./components/RestaurantCard"
import Shimmer from "./components/Shimmer"
import { useParams } from "react-router"
import { API_URL } from "./components/utils/constants"

const RestaurantMenu = () =>{

    const [resInfo, setresInfo] = useState(null)

    const {resId} = useParams();


    useEffect(() => {
        fetchMenu();
    }, [])


    const fetchMenu = async() => {
        const data = await fetch(
            API_URL+resId
        )

        const json = await data.json();

        console.log(json);

        setresInfo(json.data);
    }

    if(resInfo===null)
        return <Shimmer/>
    const {name, cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resInfo?.cards?.[4]?.card?.card?.itemCards;

    return(
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")}
            </p>
            <h2>Menu</h2>
            <ul>
                
                {
                    itemCards?.length > 0?  (itemCards.map((res,index) => (<li key={index}>{res?.card?.info?.name}</li>))) : (<li>no more restaurant</li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;