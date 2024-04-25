
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Pokemon } from "../../types/types";
import styles from './pokemons.module.css';
//Assets
import { fetchPokemons } from "../fetchpokemons";
import LoadingScreen from "../../components/LoadingScreen";
import { waitFor } from "../../utils/utils";
const Pokemons = () => {
 const [isLoading, setIsLoading] = useState(false);
 const[query, setQuery] = useState('');
 const[pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
  setIsLoading(true);
  const fetchAllPokemons = async () => {
  await waitFor(1000);
  const allPokemons = await fetchPokemons();
  setPokemons(allPokemons);
  setIsLoading(false);
   }
    fetchAllPokemons();
  }, []);

  const filteredPokemon = pokemons?.slice(0, 649).filter((pokemon) =>{
    return pokemon.name.toLowerCase().match(query.toLowerCase())
})

  if (isLoading || !pokemons) {
    return <LoadingScreen />;
  }

  return (
  <>
    <Header query={query} setQuery={setQuery}/>
    <main>
      <nav className={styles.nav}>
      {filteredPokemon?.slice(0, 649).map((pokemon) => (
         <Link 
           key={pokemon.id}
           className={styles.listItem}
            to ={`/pokemons/${pokemon.name.toLowerCase()}`}>
            <img 
                className={styles.listItemIcon} 
                src={pokemon.imgSrc} 
                alt={pokemon.name} />
            <div className={styles.listItemText}>
              <span>{pokemon.name}</span>
              <span>{pokemon.id}</span>
            </div>
          </Link>
))}
      </nav>
    </main>
    <Footer />
  </>
  );
};
export default Pokemons;