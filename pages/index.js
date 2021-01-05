import Head from "next/head";
import styles from "styles/App.module.css";

export default function App() {
  return (
    <div className="flex col h100">
      <header className={`flex ${styles.header}`}>
        <div className={`inl-flex al-ctr ml-auto ${styles.userCard}`}>
          <div className={styles.avatar}></div>
          <div>
            <div>Julie Howard </div>
            <div className="meta">Admin</div>
          </div>
        </div>
      </header>
      <main className={`h100 scroll ${styles.main}`}></main>
    </div>
  );
}
