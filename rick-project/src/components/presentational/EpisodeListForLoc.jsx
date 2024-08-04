import { Collapse } from "./Collapse"
import { LocList } from "./LocList";
import { useEpisodes } from "../hooks/useEpisodes";

export const EpisodeListForLoc = () =>{
    const {episodes} = useEpisodes();
    return(
        <div>
            {episodes.map((episode) =>(
                <Collapse 
                key={episode.id}
                className="episode" 
                title={episode.episode + ":" + episode.name} 
                content={<LocList ids={location.map(location => {
                    const id = location.split("/").pop();
                    return id;
                })}/>}
                />
            ))}
        </div>
    );
};