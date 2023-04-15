// Chakra imports
import { Flex, useColorModeValue, Image } from "@chakra-ui/react";

// Custom components
// import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from "@/components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <Image src="/img/logo-string.svg" alt="logo" minW={200} pr={4} pb={2} />
      {/*<HorizonLogo h='26px' w='175px' my='32px' color={logoColor} />*/}
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
