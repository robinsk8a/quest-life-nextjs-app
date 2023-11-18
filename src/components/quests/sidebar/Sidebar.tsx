import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <section className={styles.container}>
      <li className={styles.questItem}>
        <Link href={"/quests"}>Quests</Link>
      </li>
      <li className={styles.subquestItem}>
        <Link href={"/quests/subquests"}>Subquests</Link>
      </li>
    </section>
  );
};

export default Sidebar;
