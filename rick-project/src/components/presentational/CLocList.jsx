import { LocItem } from "./LocItem"
import { useCharacters } from "../hooks/useCharacters"

export const CLocList = ({ ids }) => {
    const {characters, isLoading} = useCharacters(ids);
    if (isLoading){
        return <div className="loading">Загрузка...</div>
    }
    return(
        <div className="characters-container">
            {characters.map((character) => (
              <LocItem key={character.id} character={character} />
            ))}
        </div>
    )
  
}

