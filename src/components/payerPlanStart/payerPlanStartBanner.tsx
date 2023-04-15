import Card from "@/components/card/Card";
import { Box, Button, Flex, Text, Icon, Menu } from "@chakra-ui/react";
import IconBox from "@/components/payerPlan/iconBox";
import Image from "next/image";
import { Plan } from "@/model/plan";
import { Payment } from "@/model/payment";

export default function PayerPlanStartBanner(props: {
  payment: Payment;
  plan: Plan;
}) {
  const statusImg = props.payment.status ? "/img/check.png" : "/img/cancel.png";
  return (
    <Card mb={{ base: "0px", lg: "20px" }} alignItems="center">
      <Flex w="100%">
        <Menu>
          <></>
        </Menu>
      </Flex>
      <IconBox
        mx="auto"
        h="100px"
        w="100px"
        icon={
          <Image
            src={statusImg}
            color="#F4F7FE"
            width="46"
            height="46"
            alt="check"
          />
        }
        bg={"#F4F7FE"}
      />
      <Text color="#2B3674" fontWeight="bold" fontSize="2xl" mt="10px">
        Transaction Status
      </Text>
      <Text
        color="#A3AED0 "
        fontSize="md"
        maxW={{ base: "100%", xl: "80%", "3xl": "60%" }}
        mx="auto"
      >
        {props.payment.status ? (
          <>Normal. No problems have occurred.</>
        ) : (
          <>Transaction was canceled.</>
        )}
      </Text>
      <Box w="100%" mt="auto">
        <Flex w="100%" justify="center" align="center" mb="10px"></Flex>
      </Box>
    </Card>
  );
}
