import { Box, Flex, Text } from "@chakra-ui/react";
import { AiFillFileImage } from "react-icons/all";
import Image from "next/image";

export default function PayerWalletBanner(props: {
  address: any;
  assetBalance: string;
  assetSymbol: string;
  assetIconImg: string;
}) {
  return (
    <Box background="white" w="100%" p={4} color="white" borderRadius="30px">
      <Text color={"black"} fontSize="24px">
        Deposit Address
      </Text>
      <Text color="gray" fontSize="16px">
        The address of the deposit destination. Deposits and withdrawals can be
        made while subscriptions are running
      </Text>
      <Box background="white" p={4} mt={4} borderRadius="10px" boxShadow="md">
        <Box p={4}>
          <Text color="#A3AED0" fontSize="16px">
            Address
          </Text>
          <Text color="#2B3674" fontSize="14px">
            {props.address}
          </Text>
        </Box>
      </Box>
      <Box background="white" p={4} mt={4} borderRadius="10px" boxShadow="md">
        <Flex>
          <Image
            width={80}
            height={80}
            src={props.assetIconImg}
            alt={props.assetSymbol}
          />
          <Box p={4}>
            <Text color="gray" fontSize="16px">
              {props.assetBalance} {props.assetSymbol}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
