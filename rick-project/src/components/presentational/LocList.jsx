import { Collapse } from "./Collapse"
import { CLocList } from "./CLocList";
import { useEpisodes } from "../hooks/useEpisodes";


export const LocList = () =>{
    const getCharacterQ = () => {
        fetch(`https://rickandmortyapi.com/api/character/5`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      };
    getCharacterQ();
    const {episodes} = useEpisodes();
    return(
        <div>
            {episodes.map((episode) =>(
                <Collapse 
                key={episode.id}
                className="episode" 
                title={episode.episode + ":" + episode.name} 
                content={<CLocList ids={episode.characters.map(character => {
                    const id = character.split("/").pop();
                    return id;
                })}/>}
                />
            ))}
        </div>
    );
};