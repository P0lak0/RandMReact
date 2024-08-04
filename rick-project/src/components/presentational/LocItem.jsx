export const LocItem = ({character}) =>{
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
    
    return (
        <div className={"character " + getStatusClass(character.status)}>
          <div className="character-left">
             <img src={character.image} alt={character.name} />
          </div>
          <div className="character-right">
              <h3> {character.location.name}</h3>
              <div>Герой живущий в этой локации:{character.name}</div>
          </div>
      </div>
    )
}