import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import img from "next/image";

import { ethers } from "ethers";

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { stakingContractAddress } from "../const/yourDetails";

export default function Home() {
  const address = useAddress();
  const [amountToStake, setAmountToStake] = useState(0);

  // Initialize all the contracts
  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress,
    "custom"
  );

  // Get contract data from staking contract
  const { data: rewardTokenAddress } = useContractRead(staking, "rewardToken");
  const { data: stakingTokenAddress } = useContractRead(
    staking,
    "stakingToken"
  );

  // Initialize token contracts
  const { contract: stakingToken, isLoading: isStakingTokenLoading } =
    useContract(stakingTokenAddress, "token");
  const { contract: rewardToken, isLoading: isRewardTokenLoading } =
    useContract(rewardTokenAddress, "token");

  // Token balances
  const { data: stakingTokenBalance, refetch: refetchStakingTokenBalance } =
    useTokenBalance(stakingToken, address);
  const { data: rewardTokenBalance, refetch: refetchRewardTokenBalance } =
    useTokenBalance(rewardToken, address);

  // Get staking data
  const {
    data: stakeInfo,
    refetch: refetchStakingInfo,
    isLoading: isStakeInfoLoading,
  } = useContractRead(staking, "getStakeInfo", [address || "0"]);

  useEffect(() => {
    setInterval(() => {
      refetchData();
    }, 10000);
  }, []);

  const refetchData = () => {
    refetchRewardTokenBalance();
    refetchStakingTokenBalance();
    refetchStakingInfo();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="/zgc.png" width={350} className={styles.down} />
        <h2 className={styles.description}>
          Stake Zerogic <span className={styles.span}> Earn Idrt!</span>
        </h2>
        <p className={styles.paragraf}>
          Earn passive income through zerogic staking{" "}
          <span className={styles.span}> and earn rupiah tokens!</span>
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.stakeContainer}>
          <img className={styles.bground} src="/bgg.png" width={200} />
        </div>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Zgc Balance:</h2>
            <p>{stakingTokenBalance?.displayValue}</p>
            <input
              className={styles.textbox}
              type="number"
              value={amountToStake}
              onChange={(e) => setAmountToStake(e.target.value)}
            />
          </a>
          <Web3Button
            className={styles.button}
            contractAddress={stakingContractAddress}
            action={async (contract) => {
              await stakingToken.setAllowance(
                stakingContractAddress,
                amountToStake
              );
              await contract.call("stake", [
                ethers.utils.parseEther(amountToStake),
              ]);
              alert("Tokens staked successfully!");
            }}
          >
            Stake
          </Web3Button>

          <a className={styles.card}>
            <h2>Idrt Balance:</h2>
            <p>{rewardTokenBalance?.displayValue}</p>
          </a>
          <Web3Button>Swap</Web3Button>

          <a className={styles.card}>
            <h2>Current staked</h2>
            <p>
              {stakeInfo && ethers.utils.formatEther(stakeInfo[0].toString())}
            </p>
            <input
              className={styles.textbox}
              type="number"
              value={amountToStake}
              onChange={(e) => setAmountToStake(e.target.value)}
            />
          </a>
          <Web3Button
            className={styles.button}
            contractAddress={stakingContractAddress}
            action={async (contract) => {
              await contract.call("withdraw", [
                ethers.utils.parseEther(amountToStake),
              ]);
              alert("Tokens unstaked successfully!");
            }}
          >
            Unstake
          </Web3Button>

          <a className={styles.card}>
            <h2>Current reward tokens</h2>
            <p>
              {stakeInfo && ethers.utils.formatEther(stakeInfo[1].toString())}
            </p>
          </a>
          <Web3Button
            className={styles.button}
            contractAddress={stakingContractAddress}
            action={async (contract) => {
              await contract.call("claimRewards", []);
              alert("Rewards claimed successfully!");
            }}
          >
            Claim rewards
          </Web3Button>
        </div>
        <button className={styles.buy}>
          <img className={styles.bground2} src="/bgg.png" width={160} />
          <a href="https://polycat.finance/swap?inputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&outputCurrency=0x4A7db095D7D56De8af219a5aE9C0b3Be11F240F5">
            Buy Zgc
          </a>
          <img src="/zgc.png" width={70} />
        </button>
      </main>
    </div>
  );
}
