import { IMG_URL } from "./utils/constants";

export const ResturantCard = (props) => {

    const {resData} = props;

    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRatingString,
        sla,
        slaString,
        areaName,
        locality

    } = resData?.info

    return(
        <div class="Restra-Cards">
            <h3 id="h3">
                <i>{name}</i>
            </h3>
            <hr/>
            <div id="retra">
                <img className="LogoIn" src = {IMG_URL+cloudinaryImageId}> 
                </img>
                <div id="k1"><b>Menu</b></div>
                <div id="downtag">
                    {cuisines.join(",  ")}
                    <hr/>
                    <h4>Rating : {avgRatingString}</h4>
                    <hr/>
                    <h4>Delivery Time : {sla.slaString}</h4>
                    <h4>Location : {locality + "\n "+areaName}</h4>
                </div>
            </div>
            
            
        </div>
    )
}

export default ResturantCard