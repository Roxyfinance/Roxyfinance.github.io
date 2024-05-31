import styles from "../styles/Home.module.css";
export default function footer() {
  return (
    <div className={styles.focon}>
      <div className={styles.faconItems}>
        <img className={styles.putar} src="/zgc.png" width={70} />
        <h1>Roxy</h1>
        <h3 className={styles.price}></h3>
      </div>
      <div className={styles.faconItem}>
        <h3>Service</h3>
        <p>Aromatica Parfume</p>
        <p>Psycoterhapy</p>
        <p>Psycaltherapy</p>
        <p>Reflexology</p>
      </div>

      <div className={styles.faconItem}>
        <h3>Product</h3>
        <p>Add liquidity</p>
        <p>Pools</p>
        <p>Farms</p>
        <p>Swap</p>
      </div>
      <div className={styles.faconItemdua}>
        <h3>Support</h3>
        <img src="/quicke.png" width={205} />
        <img src="/polysc.png" width={205} />
      </div>
    </div>
  );
}
