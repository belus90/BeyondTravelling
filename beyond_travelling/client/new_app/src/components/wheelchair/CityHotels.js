import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const CityHotels = (props) => {
const [selectedCityHotel, setSelectedCityHotel] = useState(null);
const selectedCity = props.selectedCity;
const cityHotels = selectedCity.hotels;

  const cityHotelsList = cityHotels.map((cityHotel, index) => {
    return <div><Button variant="light" onClick = {() => onCityClick(cityHotel) }>{cityHotel.hotel_name}</Button></div>

  })

  console.log(cityHotels)

  const onCityClick = function(cityHotel){
    setSelectedCityHotel(cityHotel);
}

  if (selectedCity != undefined && selectedCityHotel === null) {
    return (
      <>

      <li>{cityHotelsList}</li>
      </>
    )  
} else if(selectedCityHotel != null){
  return (
  <div>
    <br>
    </br>
    <h2>{selectedCityHotel.hotel_name}</h2>   
    <br></br>
    {/* <li>{selectedCityHotel.hotel_name}</li> */}
    <li>Contact number: {selectedCityHotel.contact_number}</li>
    <li><a href= {selectedCityHotel.website}>Hotel Website</a></li>
    <li>Address: {selectedCityHotel.address}</li>
    <li>{selectedCityHotel.img}</li>
    {/* <img src= "https://raw.githubusercontent.com/elicodes89/BeyondTravelling/develop/beyond_travelling/client/new_app/src/ireland_images/countryside2.jpg" alt= "" width = "200px" /> */}

    <iframe width="560" height="315" src={selectedCityHotel.img} title="Video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
  
  )  
}
else {
  return (
    <>

    <h1>hey</h1>
    </>
  )
}
}

export default CityHotels;