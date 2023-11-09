import styles from "../styles/Home.module.css";
export default function footer() {
  return (
    <div className={styles.focon}>
      <div className={styles.faconItems}>
        <img className={styles.putar} src="/zgc.png" width={70} />
        <h1>Zerogic</h1>
      </div>
      <div className={styles.faconItem}>
        <h3>Product</h3>
        <p>Eternal</p>
        <p>Rupiah-C</p>
        <p>Zerogic</p>
        <p>Clayswap</p>
      </div>

      <div className={styles.faconItem}>
        <h3>Service</h3>
        <p>Add liquidity</p>
        <p>Vaults</p>
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
