import React,{createContext,useReducer} from "react";
import axios from "axios";

const initialState={
    user:"",
    email:"",
    totalFast:0,
    isFasting:true,
    fastAverage7:0,
    longestFast:0,
    longestStreak:0,
    currentStreak:0,
    fasts=[{

        start,
        endTime,
        day:"",
        totalfast:0

    }]

}
const dailyobject={
    date:TimeRanges,
    start:"",
    end:"",
    fastType:""
}
   

