import styles from "styles/Shell.module.css";

export default function Shell({ children }) {
  return (
    <div className="h100">
      <header className={`flex ${styles.header}`}>
        <div className={`inl-flex al-ctr ml-auto ${styles.userCard}`}>
          <div className={styles.avatar}></div>
          <div>
            <div>Julie Howard </div>
            <div className="meta">Admin</div>
          </div>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
