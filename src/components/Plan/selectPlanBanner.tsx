// Chakra imports
import { Box, Button, Flex, Link, Text,Image } from '@chakra-ui/react';
import { useState } from 'react';

export default function SelectPlanBanner(props: {
    selectPlan:string ,
    useSelectPlan: any,
    planName:string,
    usePlanName:any,
    maxMember:number,
    useMaxMember:any,
    amountPerMonth:number,
    useAmountPerMonth:any
}) {
    const onSelectBasicPlan = () => {
        if (props.selectPlan !== "Basic Plan"){
            props.useSelectPlan("Basic Plan")
            props.usePlanName("Basic Plan")
            props.useMaxMember(5)
            props.useAmountPerMonth(0.03)
        }else{
            props.useSelectPlan("")
        }
    }

    const onSelectProPlan = () => {
        if (props.selectPlan !== "Pro Plan"){
            props.useSelectPlan("Pro Plan")
            props.usePlanName("Pro Plan")
            props.useMaxMember(15)
            props.useAmountPerMonth(0.05)
        }else{
            props.useSelectPlan("")
        }
    }

    const onSelectEnterprisePlan = () => {
        if (props.selectPlan !== "Enterprise Plan"){
            props.useSelectPlan("Enterprise Plan")
            props.usePlanName("Enterprise Plan")
            props.useMaxMember(20)
            props.useAmountPerMonth(1)
        }else{
            props.useSelectPlan("")
        }
    }

	// Chakra Color Mode
	return (
		<Box background="white" w='100%' p={4} color='white' borderRadius='30px'>
            <Text color={"black"} fontSize="24px" >
                Plan Template
            </Text>
            <Text
                color="gray"
                fontSize="16px"
            >
                Here you can find more details about your projects. Keep you user engaged by providing meaningful information.
            </Text>
            <Box background="white" p={4} mt={4} borderRadius='10px' boxShadow="md" onClick={onSelectBasicPlan} borderLeft={props.selectPlan==="Basic Plan"?"5px solid blue":""}>
                <Flex> 
                    <Image 
                        boxSize='80px'
                        objectFit='cover'
                        src="/img/basic-plan.jpg"
                    />
                    <Box p={4}>
                        <Text color="#2B3674" fontSize="16px" >
                            Basic Plan
                        </Text>
                        <Text color="#A3AED0" fontSize="14px" >
                            $0.03 per user / minute
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Box background="white" p={4} mt={4} borderRadius='10px' boxShadow="md" onClick={onSelectProPlan} borderLeft={props.selectPlan==="Pro Plan"?"5px solid blue":""}>
                <Flex>
                    <Image 
                        boxSize='80px'
                        objectFit='cover'
                        src="/img/pro-plan.jpg"
                    />
                    <Box p={4}>
                        <Text color="#2B3674" fontSize="16px">
                        Pro Plan
                        </Text>
                        <Text color="#A3AED0" fontSize="14px" >
                            $0.05 per user / minute
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Box background="white" p={4} mt={4} borderRadius='10px' boxShadow="md" onClick={onSelectEnterprisePlan} borderLeft={props.selectPlan==="Enterprise Plan"?"5px solid blue":""}>
                <Flex>
                    <Image 
                        boxSize='80px'
                        objectFit='cover'
                        src="/img/enterprise-plan.jpg"
                    />
                    <Box p={4}>
                        <Text color="#2B3674" fontSize="16px">
                        Enterprise Plan
                        </Text>
                        <Text color="#A3AED0" fontSize="14px" >
                            $1 per user / minute
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
	);
}