import styles from "../styles/Home.module.css";
export default function footer() {
  return (
    <div className={styles.focon}>
      <div className={styles.faconItem}>
        <h1>Navigasi</h1>
        <h4>Home</h4>
        <h4>Farms</h4>
        <h4>Vaults</h4>
        <h4>Contact us</h4>
      </div>
      <div className={styles.faconItem}>
        <h1>Product</h1>
        <h4>AddLiquidity</h4>
        <h4>Vaults</h4>
        <h4>Farms</h4>
        <h4>Swap</h4>
      </div>
      <div className={styles.faconItemdua}>
        <h1>Partners</h1>
        <img src="/quicke.png" width={205} />
        <img src="/polysc.png" width={205} />
        <img src="/aave.png" width={180} />
      </div>
    </div>
  );
}
