import React from 'react';
import './part.css';
import useFetch from '../Hook/useFetch';


function Part() {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByprovince?provinces=western,northcentral,southern,sabaragamuwa,northwestern,north,uva,central,eastern");

  return (
    <div>
      <div className='part'>
        {/* <div className="parttext">
          <h1>Trending destinations</h1>
          <h2>Most popular choices for travellers from Sri Lanka</h2>
        </div> */}
        {loading ? (
          "Loading Please wait"
        ) : (
          <>
            <div className="partItem">
              <div className="partItems1">
                <div className="subpart1">
                  <img src="src/assets/Colombo3.webp" alt="" className="partimg" />
                  <h1>Western Province 🇱🇰</h1>
                  <h2>{data[0]} properties</h2>
                </div>
                <div className="subpart1">
                  <img src="src/assets/NorthCentral.jpg" alt="" className="partimg" />
                  <h1>North Central Province 🇱🇰</h1>
                  <h2>{data[1]}  properties</h2>
                </div>
              </div>
              <div className="partItems2">
                <div className="subpart2">
                  <img src="src/assets/Southern Province.jpg" alt="" className="partimg1" />
                  <h1>Southern Province 🇱🇰</h1>
                  <h2>{data[2]}  properties</h2>
                </div>
                <div className="subpart2">
                  <img src="src/assets/SabaragamuwaProvince.jpg" alt="" className="partimg1" />
                  <h1> Sabaragamuwa Province 🇱🇰</h1>
                  <h2> {data[3]} properties</h2>
                </div>
                <div className="subpart2">
                  <img src="src/assets/NorthWestern.jpg" alt="" className="partimg1" />
                  <h1>North Western Province 🇱🇰</h1>
                  <h2>{data[4]}  properties</h2>
                </div>
              </div>
              <div className="partItems3">
                <div className="subpart2">
                  <img src="src/assets/NorthernProvince .webp" alt="" className="partimg2" />
                  <h1>Northern Province  🇱🇰</h1>
                  <h2>{data[5]}  properties</h2>
                </div>
                <div className="subpart2">
                  <img src="src/assets/ELLA.jpg" alt="" className="partimg2" />
                  <h1> Uva Province 🇱🇰</h1>
                  <h2>{data[6]} properties</h2>
                </div>
                <div className="subpart2">
                  <img src="src/assets/EasternProvince.jpg" alt="" className="partimg2" />
                  <h1> Eastern Province 🇱🇰</h1>
                  <h2>{data[7]}  properties</h2>
                </div>
                <div className="subpart2">
                  <img src="src/assets/CentralProvince.jpg" alt="" className="partimg2" />
                  <h1>Central Province 🇱🇰</h1>
                  <h2>{data[8]} properties</h2>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Part;
