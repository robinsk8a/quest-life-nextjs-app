import Link from "next/link";
import styles from "@/components/header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <span>Name quests</span>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <button className=" bg-emerald-500 py-1 px-4 rounded-md">
                <Link href={"/login"}>Login</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
