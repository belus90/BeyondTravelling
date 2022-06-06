import React , { useState } from 'react';
import HotelDetail from './HotelDetail';
import Button from 'react-bootstrap/Button';

const HotelList = ({regions}) => {
  const [selectedRegion, setSelectedRegion] = useState(null);


    const regionsItems = regions.map((region, index) => {
      return <div><Button variant="light" onClick = {() => onRegionClick(region) }><img src= {region.img} alt= "" width = "200px" /></Button></div>

    })

        const onRegionClick = function(region){
        setSelectedRegion(region);
    }
    
  
  if (selectedRegion) {
    return (
      
      <div>
      <ul>
      <h3>Where would you like to go?</h3>

        <HotelDetail region={selectedRegion}/>
      </ul>
    </div>
    )

  } else if (!selectedRegion) {
    return (      
    <div>
    <ul>
      {regionsItems}
    </ul>
  </div>
  
    )}
};

export default HotelList;