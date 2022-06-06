import styles from "./SideBar.module.css";

function Sidebar() {
  const tabs = ["Home", "Services", "News", "Blog", "Contact"];
  return (
    <div className={styles.wapper}>
      {tabs.map((tab, index) => (
        <div key={index} className={styles.tabItem}>
          {tab}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
