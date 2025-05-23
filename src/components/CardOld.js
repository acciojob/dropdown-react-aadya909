import React, { useState, useEffect } from "react";
import { stateDescription, cityDescription, landmarkDescription } from "./data"

function CardOld({ stateName, cityName, landName }) {
    // Get state data once
    let stateData = stateDescription(stateName);

    // Get city data with null checks
    let cityData = stateData?.city?.find(city => city.name === cityName) || {};

    // Get landmark data with null checks
    let landmarkData = landmarkDescription(stateName, cityName, landName);
    // cityData?.landmarks?.find(landmark => landmark.name === landName) || {};

    return (
        <div>
            <div id="state-title">{stateData?.name}</div>
            <div id="state-description">{stateData?.description}</div>

            <div id="city-title">{cityData?.name}</div>
            <div id="city-description">{cityData?.description}</div>

            <div id="landmark-title">{landmarkData?.name}</div>
            {/* <div id="landmark-description">{landmarkData?.description}</div> */}
            <div id="landmark-description">
                {landmarkData?.description || 'No description available'}
            </div>
        </div>
    )
}

export default CardOld