// Chakra imports
import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  Image,
  Input,
  Select,
  Switch,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { useAccount } from "wagmi";
import { ethers } from "ethers";
import stringToBigNumberHash from "@/hooks/ethers";
import { useContract } from "@/hooks/useContract";

interface PlanStruct {
  planKey: ethers.BigNumber;
  amountPerMonth: number;
  receiverWallet: ethers.BigNumber;
  maxMember: number;
}

export default function SettingPlan(props: {
  selectPlan: string;
  useSelectPlan: any;
  planName: string;
  usePlanName: any;
  maxMember: number;
  useMaxMember: any;
  amountPerMonth: number;
  useAmountPerMonth: any;
}) {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [isTrial, setIsTrial] = useState(false);
  const [isSales, setIsSales] = useState(false);
  const [isDisplayPopular, setIsDisplayPopular] = useState(false);
  const [isDisplayCustom, setIsDisplayCustom] = useState(false);
  const { subscriptionManager } = useContract();

  const onChangePlanName = (e: any) => {
    props.useSelectPlan("");
    props.usePlanName(e.target.value);
  };

  const onChangeMaxMember = (e: any) => {
    props.useSelectPlan("");
    props.useMaxMember(e.target.value);
  };

  const onChangeAmountPerMonth = (e: any) => {
    props.useSelectPlan("");
    props.useAmountPerMonth(e.target.value);
  };

  const onClickSubmit = async () => {
    if (isDisconnected) {
      return;
    }
    const myPlan: PlanStruct = {
      planKey: stringToBigNumberHash(props.planName),
      amountPerMonth: Math.floor(props.amountPerMonth * 1000),
      receiverWallet: ethers.BigNumber.from(address),
      maxMember: props.maxMember,
    };

    try {
      await subscriptionManager?.createPlan(myPlan);
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      }
      console.log(e);
    }
    window.location.href = "/dashboard";
  };

  // 下見せるため
  const onchangeTrial = () => {
    setIsTrial(!isTrial);
  };

  const onchangeSales = () => {
    setIsSales(!isSales);
  };

  const onchangePopular = () => {
    setIsDisplayPopular(!isDisplayPopular);
  };

  const onchangeCustom = () => {
    setIsDisplayCustom(!isDisplayCustom);
  };

  // 上見せるため

  // Chakra Color Mode
  return (
    <>
      <VStack
        background="white"
        w="100%"
        p={4}
        color="white"
        borderRadius="30px"
        h={"100%"}
        alignItems="start"
        justify="space-between"
      >
        <Text color={"black"} fontSize="22" fontWeight="700">
          Settings
        </Text>
        <Text color="gray" fontSize="16px">
          Set up your subscription details.
        </Text>

        <Flex pt={4}>
          <VStack alignItems="start">
            <Text color={"black"} fontSize="14px">
              Plan Name*
            </Text>
            <Input
              type="text"
              value={props.planName}
              onChange={onChangePlanName}
            />
            <Text color={"black"} fontSize="14px">
              Max Member*
            </Text>
            <Input
              type="number"
              value={props.maxMember}
              onChange={onChangeMaxMember}
            />
            <Text color={"black"} fontSize="14px">
              Amount Per Month*
            </Text>
            <Input
              type="number"
              value={props.amountPerMonth}
              onChange={onChangeAmountPerMonth}
            />
          </VStack>
          <Box>
            <Flex p={4}>
              <Switch
                pr={4}
                size="sm"
                onChange={onchangeTrial}
                colorScheme="brand"
              />
              <Text color={"black"}>Free trial</Text>
            </Flex>
            <Flex p={4}>
              <Switch
                pr={4}
                size="sm"
                onChange={onchangeSales}
                colorScheme="brand"
              />
              <Text color={"black"}>Contacts Sales</Text>
            </Flex>
            <Flex p={4}>
              <Switch
                pr={4}
                size="sm"
                onChange={onchangePopular}
                colorScheme="brand"
              />
              <Text color={"black"}>Display as most popular</Text>
            </Flex>
            <Flex p={4}>
              <Switch
                pr={4}
                size="sm"
                onChange={onchangeCustom}
                colorScheme="brand"
              />
              <Text color={"black"}>Display a fee as custom</Text>
            </Flex>
          </Box>
        </Flex>
        <HStack justify="end" p={4} w="full">
          <Button onClick={onClickSubmit} colorScheme="brand">
            Submit Plan
          </Button>
        </HStack>
      </VStack>
    </>
  );
}
