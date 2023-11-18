import Sidebar from "@/components/quests/sidebar/Sidebar";
import styles from "@/components/quests/Quests.module.css";

const QuestsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.questsContainer}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>
  );
};

export default QuestsLayout;
