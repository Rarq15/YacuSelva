import Link from "next/link";
import styles from "./login.module.css"

export default function LogInButton() {
  return (
    <button className={styles.button}>
      <Link href="/api/auth/login">Iniciar Sesión</Link>
    </button>
  );
}
