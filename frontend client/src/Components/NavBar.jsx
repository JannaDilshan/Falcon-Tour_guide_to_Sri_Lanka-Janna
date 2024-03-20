import React, { useState, useContext } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faHotel, faCar, faRoute, faUtensils, faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { Link, useNavigate } from 'react-router-dom'; // Added Link and useNavigate
import { SearchContext } from '../context/searchcon';

function NavBar({ type }) {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const navigate = useNavigate();
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const handleOption = (name, operation) => {
        setOptions(prev => ({
            ...prev,
            [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1,
        }));
    }

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates: date, options } });
        navigate("/hotels", { state: { destination, date, options } });
        console.log(date);
    }

    return (
        <div className='head'>
            <div className={type === "list" ? "headContainer listMode" : "headContainer"}>
                <div className="headList">
                    <Link to="/Booking"> {/* Changed Link destination */}
                        <div className='headListItem active '>
                            <FontAwesomeIcon icon={faHotel} />
                            <span>Hotel</span>
                        </div>
                    </Link>
                    <div className='headListItem '>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Transport</span>
                    </div>
                    <div className='headListItem '>
                        <FontAwesomeIcon icon={faRoute} />
                        <span>Attraction</span>
                    </div>
                    <div className='headListItem '>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span>Restaurant</span>
                    </div>
                </div>
                {type !== "List" &&
                    <div className="headsearch">
                        <div className="headserchItem">
                            <FontAwesomeIcon icon={faBed} className='headIcon' />
                            <input type="text" placeholder='where are you going?' className='headSearchInput' onChange={e => setDestination(e.target.value)} />
                        </div>
                        <div className="headserchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className='headIcon' />
                            <span onClick={() => setOpenDate(!openDate)} className='headsearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                            />}
                        </div>
                        <div className="headserchItem">
                            <FontAwesomeIcon icon={faPerson} className='headIcon' />
                            <span onClick={() => setOpenOptions(!openOptions)} className='headsearchText'>{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
                            {openOptions &&
                                <div className="options">
                                    <div className="opationItem">
                                        <span className='optionText'>Adult</span>
                                        <div className="optioncount">
                                            <button className='optionCounterButton' disabled={options.adult <= 1} onClick={() => handleOption('adult', 'd')}>-</button>
                                            <span className='optionCounterNumber'>{options.adult}</span>
                                            <button className='optionCounterButton' onClick={() => handleOption('adult', 'i')}>+</button>
                                        </div>
                                    </div>
                                    <div className="opationItem">

                                        <span className='optionText'>Children</span>
                                        <div className="optioncount">
                                            <button className='optionCounterButton' disabled={options.children <= 0} onClick={() => handleOption('children', 'd')}>-</button>
                                            <span className='optionCounterNumber'>{options.children}</span>
                                            <button className='optionCounterButton' onClick={() => handleOption('children', 'i')}>+</button>
                                        </div>
                                    </div>
                                    <div className="opationItem">
                                        <span className='optionText'>Room</span>
                                        <div className="optioncount">
                                            <button className='optionCounterButton' disabled={options.room <= 1} onClick={() => handleOption('room', 'd')}>-</button>
                                            <span className='optionCounterNumber'>{options.room}</span>
                                            <button className='optionCounterButton' onClick={() => handleOption('room', 'i')}>+</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="headserchItem">
                            <button className="headBtn" onClick={handleSearch}> Search </button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default NavBar;
