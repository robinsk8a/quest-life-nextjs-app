import Sidebar from "./sidebar/Sidebar";
import QuestSection from "./quest-section/QuestSection";
import styles from "./Quests.module.css";

const Quests = () => {
  return (
    <div className={styles.container}>
      <div className={styles.simatarra}>
        <h1>talk</h1>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.questSectionContainer}>
          <QuestSection />
        </div>
      </div>
    </div>
  );
};

export default Quests;
