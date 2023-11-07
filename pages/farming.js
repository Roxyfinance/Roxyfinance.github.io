import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  darkTheme,
} from "@thirdweb-dev/react";

import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

import Idrc from "../component/Idrc";
import { Box } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { stakingContractAddress } from "../const/yourDetails";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

export default function Home() {
  const address = useAddress();
  const [amountToStake, setAmountToStake] = useState(0);
  const [amountToWithdraw, setAmountToWithdraw] = useState(0);

  // Initialize all the contracts
  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress,
    "custom"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      {/* NAV */}
      <div></div>
      <div className={styles.connect}>
        <div>
          <Breadcrumb className={styles.breadt} separator="-">
            <BreadcrumbItem>
              <BreadcrumbLink className={styles.bread} href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink className={styles.bread} href="#">
                Buy Token
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink className={styles.bread} href="#">
                Swap
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink className={styles.bread} href="/farming">
                Farms
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink className={styles.bread} href="#">
                About us
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div>
          <ConnectWallet
            theme={darkTheme({
              colors: {
                secondaryButtonBg: "#5e0000",
                connectedButtonBg: "#5e0000",
              },
            })}
            switchToActiveChain={true}
            modalSize={"compact"}
            welcomeScreen={{
              img: {
                src: "ipfs://QmSJFXUAMSf1GLtdSM7WyRcx58SzqpoQgN4hZLT8i3uRXJ/zgc-modified.png",
                width: 150,
                height: 150,
              },
              title: "Welcome to zerogic staking",
            }}
            modalTitleIconUrl={
              "ipfs://QmSJFXUAMSf1GLtdSM7WyRcx58SzqpoQgN4hZLT8i3uRXJ/zgc-modified.png"
            }
          />
        </div>
      </div>
      {/* NAV */}
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.ts}>Farms</h1>
          <h6>Just Stake Lp Tokens To Earn,High APR, Low Risk.</h6>
        </div>
      </div>
      {/* MENU */}
      {/* tombol c */}
      <div className={styles.atas}>
        <div className={styles.chek}>
          <Avatar
            className={styles.lingkarandua}
            width={35}
            name="Zerogic"
            src="/zgc.png"
          />
          <Avatar
            className={styles.lingkarandua}
            width={35}
            name="Zerogic"
            src="/poly.png"
          />
          <Avatar
            className={styles.lingkarandua}
            width={35}
            name="Zerogic"
            src="/quic.png"
          />
          <Avatar
            className={styles.lingkarandua}
            width={35}
            name="Zerogic"
            src="/ankr.png"
          />
          <Avatar
            className={styles.lingkarandua}
            width={35}
            name="Zerogic"
            src="/catt.png"
          />
          <Avatar
            className={styles.lingkarandua}
            width={35}
            name="Zerogic"
            src="/etr.png"
          />
        </div>
      </div>

      <div className={styles.accor}>
        <div className={styles.menu2}>
          <Accordion allowMultiple>
            <Navbar />
          </Accordion>
        </div>
      </div>
      {/* staking */}

      <div className={styles.gambar}>
        <img src="/wew.png" width={200} className={styles.down} />
      </div>
      <Footer />
    </div>
  );
}
