import { LocItem } from "./LocItem"
import { useLoc } from "../hooks/useLoc"

export const LocList = ({ ids }) => {
    const {locations, isLoading} = useLoc(ids);
    if (isLoading){
        return <div className="loading">Загрузка...</div>
    }
    return(
        <div className="loc-container">
            {locations.map((location) => (
              <LocItem key={locations.id} locations={locations} />
            ))}
        </div>
    )
  
}

