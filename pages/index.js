import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  darkTheme,
} from "@thirdweb-dev/react";

import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import Footer from "../component/footer";
import Buy from "../component/buy";

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
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
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
        <div className={styles.burger}>
          <Menu>
            <MenuButton
              className={styles.breada}
              as={Button}
              rightIcon={<HamburgerIcon />}
            ></MenuButton>
            <MenuList className={styles.bread}>
              <MenuItem className={styles.bread}>Home</MenuItem>
              <Buy />
              <MenuItem className={styles.bread}>Swap</MenuItem>
              <MenuItem className={styles.bread}>
                <Link href="/farming">Farms</Link>
              </MenuItem>
              <MenuItem className={styles.bread}>Vault</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div>
          <Breadcrumb className={styles.breadt} separator="-">
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink className={styles.bread} href="#">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Buy />
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
          <div>
            <h1 className={styles.ts}>Vaults</h1>
            <h6>Just Stake Some Tokens To Earn,High APR, Low Risk.</h6>
          </div>
          <div className={styles.gambardua}>
            <img src="/wew.png" width={200} className={styles.down} />
          </div>
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
            <AccordionItem>
              <h2>
                <AccordionButton className={styles.menu}>
                  <Box
                    className={styles.box}
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    <div className={styles.boxx}>
                      <img src="/zgcs.png" width={45} />
                      <h3 className={styles.padian}>
                        Earn Idrt <span className={styles.padi}>Stake Zgc</span>
                      </h3>
                    </div>
                    <h4>APR 3.5%</h4>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className={styles.now}>
                  <h4>
                    <span className={styles.ap}>Idrt</span> Earned
                  </h4>
                  <div className={styles.reward}>
                    <h4 className={styles.now}>
                      {stakeInfo &&
                        ethers.utils.formatEther(stakeInfo[1].toString())}
                    </h4>
                    <div className={styles.but}>
                      <Web3Button
                        contractAddress={stakingContractAddress}
                        action={async (contract) => {
                          await contract.call("claimRewards", []);
                          alert("Rewards claimed successfully!");
                        }}
                      >
                        Harvest
                      </Web3Button>
                    </div>
                  </div>
                </div>
                <div className={styles.now}>
                  <div>
                    <h4>
                      <span className={styles.ap}>Zgc</span> Staked
                    </h4>
                  </div>
                  <div className={styles.reward}>
                    <h4 className={styles.now}>
                      {stakeInfo &&
                        ethers.utils.formatEther(stakeInfo[0].toString())}
                    </h4>
                    <div className={styles.but}>
                      <div>
                        <Button className={styles.button} onClick={onOpen}>
                          Stake
                        </Button>

                        <Modal
                          className={styles.up}
                          closeOnOverlayClick={false}
                          isOpen={isOpen}
                          onClose={onClose}
                        >
                          <ModalOverlay />
                          <ModalContent className={styles.modal}>
                            <ModalHeader>
                              <h2>Your Wallet</h2>
                            </ModalHeader>

                            <ModalBody p={10}>
                              <div className={styles.judul}>
                                <p>IdrcBalance:</p>
                                <p>{rewardTokenBalance?.displayValue}</p>
                              </div>
                              <div className={styles.judul}>
                                <p>Zgc Balance:</p>
                                <p>{stakingTokenBalance?.displayValue}</p>
                              </div>
                            </ModalBody>
                            <div className={styles.close}>
                              <input
                                className={styles.textbox}
                                type="number"
                                value={amountToStake}
                                onChange={(e) =>
                                  setAmountToStake(e.target.value)
                                }
                              />
                              <input
                                className={styles.textbox}
                                type="number"
                                value={amountToWithdraw}
                                onChange={(e) =>
                                  setAmountToWithdraw(e.target.value)
                                }
                              />
                            </div>
                            <ModalFooter>
                              <Web3Button
                                className={styles.clos}
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
                              <Web3Button
                                className={styles.clos}
                                contractAddress={stakingContractAddress}
                                action={async (contract) => {
                                  await contract.call("withdraw", [
                                    ethers.utils.parseEther(amountToWithdraw),
                                  ]);
                                  alert("Tokens unstaked successfully!");
                                }}
                              >
                                Unstake
                              </Web3Button>
                            </ModalFooter>
                            <ModalCloseButton className={styles.closb} />
                          </ModalContent>
                        </Modal>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bung}>
                  <div className={styles.foot}>
                    <h3>APR:</h3>
                    <h3>3.56%</h3>
                  </div>
                  <div className={styles.foot}></div>
                  <div className={styles.foot}>
                    <h4>Ends in:</h4>
                    <div className={styles.ass}>
                      <a className={styles.ap} href="">
                        Finished
                      </a>
                      <a className={styles.ap} href="">
                        View Project
                      </a>
                      <a className={styles.ap} href="">
                        View Contract
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>

            <Idrc />
          </Accordion>
        </div>
      </div>
      {/* staking */}

      <Footer />
      <div className={styles.copyy}>
        <p class="copyright">
          &copy; 2023 Zerogic All Rights Reserved by
          <a href="#" className={styles.copyright}>
            Zerogic
          </a>
        </p>
      </div>
    </div>
  );
}
