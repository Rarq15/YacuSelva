import Image from "next/image";
import AuthState from "../auth";
import SearchBar from "../search-bar";
import styles from "./styles.module.css"
import Link from 'next/link';

export default function NavBar() {
    return (
      <div className={styles.navbar}>
        <div className={styles.logo_wrapper}>
          <Link href={'/'}>
            <Image
              src={'/logo.png'}
              width={64}
              height={64}
              alt="Logo Yacu Selva "
            />
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>

        <div>
          <div>
            <AuthState />
          </div>
        </div>
      </div>
    );
}