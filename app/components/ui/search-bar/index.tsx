import styles from "./styles.module.css"

export default function SearchBar() {
  return (
    <form className={styles.search_bar}>
      <input type="search" name="search" />
      <button type="submit">Buscar</button>
    </form>
  );
}
