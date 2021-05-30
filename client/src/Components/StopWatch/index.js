import React, { useEffect,useState } from 'react';
import moment from"moment";

const StopWatch = ({datetime,isActive,hours}) => {
    var date=moment();
    // console.log(date.format('MMM Do YY HH:mm a'))
     //console.log(moment(datetime).format('MMM Do YY HH:mm a'))
    const [hour,setHour]=useState(hours);
    console.log(hours);

    // console.log(hour);
    // console.log(date.diff(moment(datetime),'hours'));
    const [minutes,setMinutes]=useState(0);
    const [second,setSeconds]=useState(0);
    const [counter,setCounter]=useState(0);
    

    useEffect(()=>{
        let interValId;
        if(isActive)
        {

            interValId=setInterval(()=>{
                console.log(counter);
                const secondCounter=counter%60;
                const minuteCounter=Math.floor(counter / 60);
       
                const hourCounter=(parseInt(hour)+(minuteCounter==60?1:0));
       
                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
                const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}`: hourCounter;
        
                setSeconds(computedSecond);
                setMinutes(computedMinute);
                setHour(computedHour);
        
                setCounter(counter => counter + 1);
               },1000)
        }
        

        return () => clearInterval(interValId);

    },[isActive,counter])
   

    return (
        <>
        <div className="timer">
        {
            (hour==16||isActive==false||parseInt(hour)<0)?
            parseInt(hour)<0?<span>`The Timer Will Start at ${moment(datetime).format('MMM Do YY HH:mm a')}'</span>:
            <span>Done</span>:
            <div className="time">
            <span className="hour">{hour}</span>
            <span>:</span>
            <span className="minute">{minutes}</span>
            <span>:</span>
            <span className="seconds">{second}</span>
            </div>

        }
        </div>
       
        </>
    );
};

export default StopWatch;