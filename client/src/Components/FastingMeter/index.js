import React, { useEffect, useState } from 'react';
import moment from "moment";
import StopWatch from '../StopWatch';
import './index.css';
import editlogo from './pencil.svg';
import Ring from '../Ring';

const date = moment();

const FastingMeter = (props) => {

    const [FastingData, setFastingData] = useState([]);
    const [startDate, setStartDate] = useState(date.format("MMM Do"));
    const [datetime, setDateTime] = useState("");
    const [hours, setHour] = useState(0);
    const [edit, setEdit] = useState(false);
    const [time, setTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [fastingLength, setLength] = useState();
    const [isActive, setActive] = useState(true);



    function handleStart(event) {
        event.preventDefault();


        let momentObj = moment(startDate + time, 'MMM Do  HH:mm a')
        // console.log(momentObj.format("YYYY-MM-DD HH:mm a"))

        setDateTime(moment(momentObj).format('YYYY-MM-DD hh:mm:ss a'));
        //console.log(momentObj.format("YYYY-MM-DD HH:mm"));

        var newDate = momentObj.add(16, 'hours').format('YYYY-MM-DD hh:mm:ss a');
        setEndTime(moment(newDate).format("MMM Do  hh:mm a"));
        //console.log(newDate);
        var newdate = moment();
        setHour(newdate.diff(moment(datetime), 'hours'));


        //var newDate = moment(start).add(16, 'hours').format('YYYY-MM-DD hh:mm:ss a');
        //console.log(newDate);
        //setEndDate(moment(newDate));
        //setEndDate(newDate.toString());
        //var forward = moment(newDate);
        //let backward=;
        //console.log(moment(datetime).diff(forward, 'hours'));
        //console.log(endDate);

        setEdit(false);
        //console.log(start)  
    }
    function handleEdit(event) {
        event.preventDefault();

        setEdit(true);

    }
    function handleSet(event) {
        event.preventDefault();


        // setEndDate(endDate.toString());
        // setLength(datetime.diff(endDate, 'hours'));
        setActive(false);

    }



    return (
        <div className="fasting-meter">

            <div className="meter">
                <Ring isActive={isActive} datetime={datetime} hours={hours} />
            </div>

            <div className="End-Button">
                <button onClick={(event)=>handleSet(event)}>End</button></div>

            <div className="Start-and-end">
                <div className="start">

                    <h5>START</h5>
                    {edit ? <div className="Startandedit">
                        <input type="time" value={time} id="birthdaytime" name="birthdaytime" onChange={(event) => setTime(event.target.value)} />
                        <button onClick={(event) => handleStart(event)} >
                            <img src="https://img.icons8.com/small/16/000000/ok.png" />
                        </button>
                    </div>

                        :
                        <div className="ok">
                            <span>{startDate}</span>
                            <span>{time}</span>
                            <button onClick={(event) => handleEdit(event)}><img src="https://img.icons8.com/material-two-tone/24/000000/edit--v1.png" /></button>
                        </div>

                    }

                </div>
                <div className="end">
                    <h5>END</h5>
                    <span>{endTime}</span>
                </div>
            </div>
        </div>

    );
};

export default FastingMeter;