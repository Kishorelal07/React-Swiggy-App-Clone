import {ResturantCard} from "./RestaurantCard"
import ResturantCard from "./RestaurantCard";

import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const BodyTry = () =>{
    const[searchText, setSearchText] = useState("");
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);
    const[listOfRestaurant, setlistOfRestaurant] = useState([]);
    const[loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(()=>{
    fetchData();
    },[]);

    // const fetchData = async (page) => {
    //     setLoading(true);
    //     try{
    //         const requestBody = {
    //             lat: 9.9252007,
    //             lng: 78.1197754,
    //             page, // Pass the current page number
    //             pageSize: 10,
    //         };

    //         const response = await fetch ("https://crossorigin.me/https://www.swiggy.com/dapi/restaurants/list/update",
    //             {
    //                 method : "POST",
    //                 headers : {
    //                     "Content-Type" : "application/json",
    //                 },
    //                 body : JSON.stringify(requestBody),
    //             }
    //         );

    //         const json = await response.json();
    //         const actu = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    //         if(actu.length > 0){
    //             setFilteredRestaurants((prev)=>[...prev, ...actu]);
    //             setlistOfRestaurant((prev) => [...prev, ...actu]);
    //         }
    //         else{
    //             setHasMore(false);
    //         }
    //     }
    //     catch(error){

    //     }
    //     finally{
    //         setLoading(false);
    //     }
    // }


    const fetchData = async() =>{
        try{
            // setLoading(true);
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9252007&lng=78.1197754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        
        const json = await data.json();

        console.log(json);

        const actu = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setFilteredRestaurants(actu);
        setlistOfRestaurant(actu);
        }
        catch(error){

        }
        finally{
            setLoading(false);
        }
   };

    const handleSearch = (event) =>{
        const query = event.target.value.toLowerCase();
        setSearchText(query)

        const filteredData = listOfRestaurant.filter((resInt) =>
            resInt.info.name.toLowerCase().includes(query)
        );
        setFilteredRestaurants(filteredData);
    }

    const AscRatingGreaterThanFour = () =>{
        const RatingData = filteredRestaurants.filter((resInt) => (resInt.info.avgRating>4));
        //setfilterOnRating(RatingData);
        setFilteredRestaurants(RatingData);
        showAlertDialog("Button has been clicked!!")
    }

    const showAlertDialog = (message) => {
        alert(message);
    }
    
    if(loading){
        return (
            <Shimmer/>
        )
    }

    return(
        <div className="body">
            <div className="search">
                <input
                    type="input"
                    placeholder="Search for your restaurant..."
                    className="search-input"
                    value={searchText}
                    onChange={handleSearch}
                />
            </div>
            <div className="DivbuttonFeature">
                <b>OR</b>
            </div>
            <div className="DivbuttonFeature">
                <button className="buttonFeature" onClick={AscRatingGreaterThanFour }>
                    Filter out the top rating restaurant
                </button>
            </div>
            <div className="Restaurant_CARD">
                  
            {filteredRestaurants.map((restra) => (
                    <Link className="LinkTag" key={restra?.info?.id} to={"/restaurants/"+restra?.info?.id}><ResturantCard resData={restra} /></Link>
            ))
            }
            </div>
           
        </div>
        
    )
}


export default BodyTry;