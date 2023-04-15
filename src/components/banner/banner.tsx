// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction="column"
      bgImg="/img/Nftbanner.png"
      bgSize="cover"
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      align="end"
      borderRadius="30px"
    >
      <>
        <Text
          fontSize={{ base: "24px", md: "34px" }}
          fontFamily={"DM Sans"}
          color="white"
          mb="14px"
          maxW={{
            base: "100%",
            md: "64%",
            lg: "46%",
            xl: "70%",
            "2xl": "50%",
            "3xl": "42%",
          }}
          fontWeight="700"
          align="end"
          lineHeight={{ base: "32px", md: "42px" }}
        >
          {"Unlock the power of choice with our"}
          <br />
          {"customizable subscription service"}
        </Text>
        <Text
          fontSize="md"
          color="#4318FF"
          maxW={{
            base: "100%",
            md: "64%",
            lg: "40%",
            xl: "56%",
            "2xl": "46%",
            "3xl": "34%",
          }}
          fontWeight="500"
          mb="40px"
          align="end"
          lineHeight="28px"
        >
          {"Pay by the day, hour, or minute"}
          <br />
          {"Introducing a new level of subscription granularity"}
        </Text>
        <Flex align="end">
          <Button
            bg="white"
            color="black"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            fontWeight="500"
            fontSize="14px"
            py="20px"
            px="27"
          >
            Discover now
          </Button>
        </Flex>
      </>
    </Flex>
  );
}
