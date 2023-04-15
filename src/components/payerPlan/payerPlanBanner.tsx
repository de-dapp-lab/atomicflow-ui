import { Box, Text, Grid, SimpleGrid, Flex, GridItem } from "@chakra-ui/react";
import Image from "next/image";

export default function PayerPlanBanner(props: {
  bgImagePath: string;
  serviceName: string;
  planImagePath: string;
  startDate: string;
  planTokenSymbol: string;
  symbolName: string;
}) {
  return (
    <>
      <Flex background="white" w="100%" p={4} color="white" borderRadius="30px">
        <Grid templateRows="repeat(3,1fr)" templateColumns="repeat(6,1fr)">
          <GridItem colSpan={6}>
            <Box
              bgImage={props.bgImagePath}
              bgSize="cover"
              borderRadius="16px"
              h="131px"
              w="100%"
              alignItems="center"
            >
              <Text color="white" fontSize="64px" align="center">
                {props.serviceName}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              width={80}
              height={80}
              src={props.planImagePath}
              alt={"plan"}
            />
          </GridItem>
          <GridItem colSpan={2} rowSpan={2}>
            <Text color="#A3AED0">Start: {props.startDate}</Text>
            <Text color="#A3AED0">Pay with</Text>
          </GridItem>
          <GridItem colSpan={3} rowSpan={2}>
            <Flex>
              <Image
                width={80}
                height={80}
                src={props.planTokenSymbol}
                alt="symbol"
              />
              <Box p={4}>
                <Text color="gray" fontSize="16px">
                  {props.symbolName}
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
