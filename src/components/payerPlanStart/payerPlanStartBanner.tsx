import Card from "@/components/card/Card";
import { Box, Button, Flex, Text, Icon, Menu } from "@chakra-ui/react";
import IconBox from "@/components/payerPlan/iconBox";
import Image from "next/image";

export default function PayerPlanStartBanner(props: {}) {
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
            src="/img/rocket.png"
            color="#F4F7FE"
            width="46"
            height="46"
            alt="icon"
          />
        }
        bg={"#F4F7FE"}
      />
      <Text color="#2B3674" fontWeight="bold" fontSize="2xl" mt="10px">
        Start Subscription
      </Text>
      <Text
        color="#A3AED0
"
        fontSize="md"
        maxW={{ base: "100%", xl: "80%", "3xl": "60%" }}
        mx="auto"
      >
        You can start your subscription
      </Text>
      <Box w="100%" mt="auto">
        <Flex w="100%" justify="center" align="center" mb="10px">
          <Button w="80%" bgColor="#4318FF" color="white">
            Start
          </Button>
        </Flex>
      </Box>
    </Card>
  );
}
