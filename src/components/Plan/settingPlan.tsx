// Chakra imports
import { Box, Button, Flex, Link, Text,Image, Input, Select, Switch } from '@chakra-ui/react';
import { useState } from 'react';

export default function SettingPlan(props: {
    selectPlan:string ,
    useSelectPlan: any,
    planName:string,
    usePlanName:any,
    maxMember:number,
    useMaxMember:any,
    amountPerMonth:number,
    useAmountPerMonth:any
}) {

    const [selectInterval,useSelectInterval] = useState("1 hour")

    const [isTrial,useIsTrial] = useState(false)
    const [isSales,useIsSales] = useState(false)
    const [isDisplayPopular,useIsDisplayPopular] = useState(false)
    const [isDisplayCustom,useIsDisplayCustom] = useState(false)


    const onChangePlanName = (e:any) =>{
        props.useSelectPlan("")
        props.usePlanName(e.target.value)
    }

    const onChangeMaxMember = (e:any) =>{
        props.useSelectPlan("")
        props.useMaxMember(e.target.value)
    }

    const onChangeAmountPerMonth = (e:any) =>{
        props.useSelectPlan("")
        props.useAmountPerMonth(e.target.value)
    }

    const onClickSubmit = () => {
        window.location.href = '/dashboad';
    }

    // 下見せるため
    const onchangeTrial = () => {
        useIsTrial(!isTrial)
    }

    const onchangeSales = () => {
        useIsSales(!isSales)
    }

    const onchangePopular = () => {
        useIsDisplayPopular(!isDisplayPopular)
    }

    const onchangeCustom = () => {
        useIsDisplayCustom(!isDisplayCustom)
    }

    // 上見せるため

	// Chakra Color Mode
	return (
        <>
		<Box background="white" w='100%' p={4} color='white' borderRadius='30px' h={"100%"}>
            <Text color={"black"} fontSize="24px" >
                Settings
            </Text>
            <Text
                color="gray"
                fontSize="16px"
            >
                Here you can find more details about your projects. Keep you user engaged by providing meaningful information.
            </Text>
            
            <Flex>
                <Box>
                <Text color={"black"} fontSize="14px" >
                    Plan Name*
                </Text>
                <Input type='text' value={props.planName} onChange={onChangePlanName}/>
                <Text color={"black"} fontSize="14px" >
                    Max Member*
                </Text>
                <Input type='number' value={props.maxMember} onChange={onChangeMaxMember}/>
                <Text color={"black"} fontSize="14px" >
                    Amount Per Month*
                </Text>
                <Input type='number' value={props.amountPerMonth} onChange={onChangeAmountPerMonth}/>
                </Box>
                <Box>
                    <Flex p={4}>
                        <Switch pr={4} size='sm' onChange={onchangeTrial}/><Text color={"black"}>Free trial</Text>
                    </Flex>
                    <Flex p={4}>
                        <Switch pr={4} size='sm' onChange={onchangeSales} /><Text color={"black"}>Contacts Sales</Text>
                    </Flex>
                    <Flex p={4}>
                        <Switch pr={4} size='sm' onChange={onchangePopular} /><Text color={"black"}>Display as most popular</Text>
                    </Flex>
                    <Flex p={4}>
                        <Switch pr={4} size='sm' onChange={onchangeCustom} /><Text color={"black"}>Display a fee as custom</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        <Flex align="end" p={4}>
            <Button onClick={onClickSubmit}>Subbmit Plan</Button>
        </Flex>
        </>
	);
}