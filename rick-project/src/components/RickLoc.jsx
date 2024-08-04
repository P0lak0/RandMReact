import { useEffect, useState } from "react";
import { fetchEpisodes, fetchLocations } from "../api";
import "./Rick.css";

export const RickLoc = () => {

    const [episodes, setEpisodes] = useState([]);
    const [charactersByEpisodes, setCharactersByEpisodes] = useState({});
    const [isLoadingByEpisodes, setIsLoadingByEpisodes] = useState({});

    useEffect(() => {
        fetchEpisodes().then((data) => {
            console.log(data);
            setEpisodes(data);
    });
    }, []);

    const handleEpisodeClick = (episode) =>{
        const ids = episode.locations.map((location) =>{
            const id = location.split("/").pop();//разделение всей строки по / и выбор последнего отрезка с помощью pop
            return id;
        });

        setIsLoadingByEpisodes({...isLoadingByEpisodes, [episode.id]: true}); 

        fetchLocations(ids).then((data) =>{
            console.log(data);
            setCharactersByEpisodes({...charactersByEpisodes, [episode.id]: data })
            setIsLoadingByEpisodes({...isLoadingByEpisodes, [episode.is]: false}); 
        });
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "Alive":
                return "character-alive";
            case "Dead":    
                return "character-dead";
            default:
                return "character-unknown";    
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
                    <div className="characters-container">
                        {isLoadingByEpisodes[episode.id] && (
                                <div className="loading">Загрузка...</div>
                        )}
                        {charactersByEpisodes[episode.id]?.map((character) =>{
                            return (
                            <div 
                              key={episode.id + ":" + character.id} 
                              className={"character " + getStatusClass(character.status)}
                            >
                                <div className="character-left">
                                   <img src={character.image} alt={character.name} />
                                </div>
                                <div className="character-right">
                                <h3> {character.location.name}</h3>
                                <div>Тип:{character.location.type}</div>
                                <div>Измерение:{character.location.url}</div>
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