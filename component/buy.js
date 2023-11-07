"use client";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  StylesProvider,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
export default function Buy() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button className={styles.bread} onClick={onOpen}>
        Buy Tokens
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        className={styles.menu}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody className={styles.modaldua}>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input id="username" placeholder="Please enter user name" />
              </Box>
              <Box>
                <FormLabel htmlFor="owner">Select Owner</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input id="username" placeholder="Please enter user name" />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input id="username" placeholder="Please enter user name" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button
              className={styles.bread}
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button className={styles.bread} colorScheme="blue">
              Approve
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
