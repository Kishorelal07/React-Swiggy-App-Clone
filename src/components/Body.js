import { resArr } from "./api/resData";

import {ResturantCard} from "./RestaurantCard"
import ResturantCard from "./RestaurantCard";
import React, { useState } from "react";

const BodyTry = () =>{
    const[searchText, setSearchText] = useState("");
    const[filteredRestaurants, setFilteredRestaurants] = useState(resArr);

    //const[filterOnRating, setfilterOnRating] = useState(resArr);

    const handleSearch = (event) =>{
        const query = event.target.value.toLowerCase();
        setSearchText(query)

        const filteredData = resArr.filter((resInt) =>
            resInt.info.name.toLowerCase().includes(query)
        );
        setFilteredRestaurants(filteredData);
    }

    const AscRatingGreaterThanFour = () =>{
        const RatingData = resArr.filter((resInt) => (resInt.info.avgRating>4));
        //setfilterOnRating(RatingData);
        setFilteredRestaurants(RatingData);
        showAlertDialog("Button has been clicked!!")
    }

    const showAlertDialog = (message) => {
        alert(message);
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
                  
                    {/* {filterOnRating.map((restra, index) => (
                          <ResturantCard key={index} resData={restra} />
                      ))} */}
                      
                     {filteredRestaurants.map((restra, index) => (
                          <ResturantCard key={index} resData={restra} />
                      ))
                    }

            </div>

        </div>
        
    )
}


export default BodyTry;