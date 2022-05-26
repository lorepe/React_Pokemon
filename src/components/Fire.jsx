import Card from "./Card";
import{ pokemonData} from "../pokemonInfo"
import './CardFire.css'

const Fire = () => {
    

    return (
        <div className="containerFire">
            {pokemonData.fire.map(poke => 
                <Card key={poke.id} name={poke.pokemonName} avatar={poke.avatar}/>
            )}
        </div>
    );
}

export default Fire;