import styles from "./innercontainer.module.css";

export default function InnerContainer({ children }) {
  return <div className={styles.innerCotainer}>{children}</div>;
}
