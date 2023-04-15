// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import { FC } from "react";
import Brand from "@/components/sidebar/components/Brand";
import { SidebarLinks } from "@/components/sidebar/components/Links";
import { Route } from "@/model/navigation";

interface Props {
  routes: Route[];
}

export const SidebarContent: FC<Props> = ({ routes }) => {
  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      <Brand />
      <Stack direction="column" mt="8px" mb="auto">
        <Box ps="20px" pe={{ lg: "16px", "2xl": "16px" }}>
          <SidebarLinks routes={routes} />
        </Box>
      </Stack>

      {/*<Box ps='20px' pe={{ lg: '16px', '2xl': '20px' }} mt='60px' mb='40px' borderRadius='30px'>*/}
      {/*	<SidebarCard />*/}
      {/*</Box>*/}
    </Flex>
  );
};
