import { Web3Button } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Swapc() {
  const [amountToStake, setAmountToStake] = useState(0);
  return (
    <div>
      <div className={styles.bungkuss}>
        <div className={styles.gape}>
          <h4>IDRC -------&#62;</h4>
          <input
            className={styles.textbox}
            type="number"
            value={amountToStake}
            onChange={(e) => setAmountToStake(e.target.value)}
          />
        </div>
        <div>
          <h4>IDRT </h4>
          <input
            className={styles.textbox}
            type="number"
            value={amountToStake}
            onChange={(e) => setAmountToStake(e.target.value)}
          />
        </div>
        <div className={styles.wee}>
          <Web3Button
            contractAddress="0xc92e083E08dF4ebaBEC552e56928EE8FdC4961A5"
            action={(contract) => {
              contract.call("transfer", [
                "0x7C56395aDA1F0f4B91e133b7aa5A8d3Fb3095496",
                amountToStake + "000000000000000000",
              ]);
            }}
          >
            Swap
          </Web3Button>
        </div>
      </div>
    </div>
  );
}
