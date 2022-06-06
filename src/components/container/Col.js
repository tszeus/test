import styles from "./Col.module.css";

function Col({ header, image, content }) {
  return (
    <div className={styles.wapper}>
      <div className={styles.header}>{header}</div>
      <div className={styles.container}>
        <div>
          <img src={image} alt=".." className={styles.image} />
        </div>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
}

export default Col;
