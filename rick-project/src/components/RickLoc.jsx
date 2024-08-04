import { useEffect, useState } from "react";
import { fetchEpisodes, fetchLocations } from "../api";
import "./RickLoc.css";

export const RickLoc = () => {

    const [episodes, setEpisodes] = useState([]);
    const [LocByEpisodes, setLocByEpisodes] = useState({});
    const [isLoadingByEpisodes, setIsLoadingByEpisodes] = useState({});

    useEffect(() => {
        fetchEpisodes().then((data) => {
            console.log(data);
            setEpisodes(data);
    });
    }, []);

    const handleEpisodeClick = (episode) =>{
        const ids = episode.location.map((location) =>{
            const id = location.split("/").pop();//разделение всей строки по / и выбор последнего отрезка с помощью pop
            return id;
        });

        setIsLoadingByEpisodes({...isLoadingByEpisodes, [episode.id]: true}); 

        fetchLocations(ids).then((data) =>{
            console.log(data);
            setLocByEpisodes({...LocByEpisodes, [episode.id]: data })
            setIsLoadingByEpisodes({...isLoadingByEpisodes, [episode.is]: false}); 
        });
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "Dimension":
                return "loc-dimension";
            default:
                return "loc-unknown";    
        }
    };

    return(
        <div>
            {episodes.map((episode) =>{
                return (
                <div 
                key={episode.id} 
                className="episode" 
                onClick={ () => handleEpisodeClick(episode)}>
                    <h3>{episode.episode + ":" + episode.name}</h3>
                    <div className="loc-container">
                        {isLoadingByEpisodes[episode.id] && (
                                <div className="loading">Загрузка...</div>
                        )}
                        {LocByEpisodes[episode.id]?.map((location) =>{
                            return (
                            <div 
                              key={episode.id + ":" + location.id} 
                              className={"loc " + getStatusClass(location.status)}
                            >
                                <div className="loc-left">
                                   <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt={location.name} />
                                </div>
                                <div className="loc-right">
                                    <h3> {location.name}</h3>
                                    <div>Тип:{location.type}</div>
                                    <div>Измерение:{location.dimension}</div>
                                </div>
                               
                            </div>
                            )
                        })}
                    </div>   
                </div>
                );
            })}
        </div>
    )
}