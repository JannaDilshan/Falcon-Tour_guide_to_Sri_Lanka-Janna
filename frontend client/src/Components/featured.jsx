import React from 'react';
import './featured.css';
import useFetch from '../Hook/useFetch';

function Featured() {
    const { data, loading, error } = useFetch(
        "http://localhost:8800/api/hotels/countByType"
    );
    const images = [
        "src/assets/hotel.jpg",
        "src/assets/villas.jpg",
        "src/assets/Resort.jpg",
        "src/assets/Cabanas.jpg"
    ];

    return (
        <div>
            <div className="parttext">
                <h1>Browse by property type</h1>
            </div>
            <div className='plist'>
                {loading ? (
                    "Loading "
                ) : (
                    <>
                        {data && data.map((item, i) => (
                            <div className="plistItem" key={i}>
                                <img src={images[i % images.length]} alt="" className='plistImg' />
                                <div className="plistTitles">
                                    <h1 className='typename'>{item.type}</h1>
                                    <h2>{item.count} {item.type}</h2>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default Featured;
