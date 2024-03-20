import React, { useState, useEffect } from 'react';
import './featuredProperty.css';
import useFetch from '../Hook/useFetch';
import { Link } from 'react-router-dom';

function FeaturedProperty() {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels?featured=true"
  );

  useEffect(() => {
    if (data) {
      const updatedFeaturedProperties = [...featuredProperties];
      const existingFeaturedIds = updatedFeaturedProperties.map(property => property.id);
      
      // Check if there are new featured properties and add them to the list
      data.forEach(property => {
        if (!existingFeaturedIds.includes(property.id)) {
          updatedFeaturedProperties.push(property);
        }
      });

      // Ensure only the latest 4 featured properties are displayed
      const latestFeaturedProperties = updatedFeaturedProperties.slice(-5);
      setFeaturedProperties(latestFeaturedProperties);
    }
  }, [data]);

  return (
    <div className='fullpart'>
      <div className="parttext">
        <h1>Homes guests love</h1>
      </div>
      <div className="fp">
        {loading ? 'Loading' : (
          <>
            {featuredProperties.map((property) => (
             
                <div className="fpItem">
                  <img src={property.image} alt={property.name} className="fpImg" />
                  <span className="fpName">{property.name}</span>
                  <span className="fpCity">{property.city}</span>
                  <span className="fpPrice">Starting from Rs.{property.cheapestPrice}</span>
                  <div className="fpRating">
                    <button>{property.rating}</button>
                    <span>Excellent</span>
                  </div>
                </div>
              
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default FeaturedProperty;
