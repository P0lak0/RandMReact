import { useState, useEffect } from "react";
import { fetchCharacters } from "../../api";

export const useCharacters =(ids) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() =>{
        setIsLoading(true);
        fetchCharacters(ids).then((data) =>{
            console.log(data);
            setCharacters(data);
            setIsLoading(false);
        })
    }, [ids]);

    return {characters, isLoading};
}