import { pokemonData } from "../pokemonInfo";
import Card from "./Card";
import './CardRock.css'

const Rock = () => {
    const {rock}=pokemonData
    
    return (
        <div className="containerRock">
            {rock.map(poke => 
                <Card key={poke.id} name={poke.pokemonName} avatar={poke.avatar}/>
            )}
        </div>
    );
}

export default Rock;