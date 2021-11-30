import { INCERMENT,DECERMENT } from "../actions"

export const increment = () =>{
    return{
        type:INCERMENT
    };
};

export const decrement = () => {
    return {
        type: DECERMENT
    };
};