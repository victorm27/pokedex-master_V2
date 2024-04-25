import styles from './footer.module.css';
import { Link } from "react-router-dom";
//Assets
import PokemonPic from "../assets/pikachu.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to = "/Pokemons" className={styles.footerLink}>
        <img className={styles.footerIcon} src={PokemonPic} alt="pokeball" />
        Pokemons
    </Link>
    </footer>
  );
};

export default Footer;