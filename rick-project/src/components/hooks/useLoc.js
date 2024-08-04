import { useState, useEffect } from "react";
import { fetchLocations } from "../../api";

export const useLoc =(ids) => {
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() =>{
        setIsLoading(true);
        fetchLocations(ids).then((data) =>{
            console.log(data);
            setLocations(data);
            setIsLoading(false);
        })
    }, [ids]);

    return {locations, isLoading};
}