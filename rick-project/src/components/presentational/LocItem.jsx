export const LocItem = ({location}) =>{
    const getStatusClass = (status) => {
        switch (status) {
            case "Dimension":
                return "loc-dimension";
            default:
                return "loc-unknown";    
        }
    };
    
    return (
        <div className={"loc " + getStatusClass(location.status)}>
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
}