import Image from "next/image";
import AuthState from "../auth";
import SearchBar from "../search-bar";
import styles from "./styles.module.css"

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo_wrapper}>
                <Image src={"/logo.png"} width={64} height={64} alt="Logo Yacu Selva "/> 
            </div>
            <div>
                <SearchBar/>
            </div>

            <div>
                <div>
                    <AuthState/>
                </div>
            </div>
        </div>
    )
}