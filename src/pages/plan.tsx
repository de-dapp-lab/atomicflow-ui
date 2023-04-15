import { NextPage } from 'next'
import { PlanLayout } from '@/layouts/plan'
import ComplexTable from '@/components/complexTable/ComplexTable'
import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import WeeklyRevenue from '@/components/weeklyRevenue/weeklyRevenue';
import Banner from '@/components/banner/banner';
import SelectPlanBanner from '../components/Plan/selectPlanBanner';
import SettingPlan from '../components/Plan/settingPlan';
import {useAccount} from "wagmi";
import LoginPage from "@/components/view/loginPage";

const Plan: NextPage = () => {

	const { address } = useAccount();
	const [selectPlan,useSelectPlan] = useState("")
	const [planName,usePlanName] = useState("")
	const [maxMember,useMaxMember] = useState(1)
	const [amountPerMonth,useAmountPerMonth] = useState(1)

    return (
		<>
		{ address === undefined && <LoginPage/> }
		{ address !== undefined && (
			<PlanLayout >
				<br></br>
				<br></br>
				<br></br>
				<Grid h='100%' templateColumns='repeat(5, 1fr)' templateRows='repeat(1, 1fr)' gap='20px' mb='20px'>
					<GridItem colSpan={2}>
						<SelectPlanBanner
							selectPlan={selectPlan}
							useSelectPlan={useSelectPlan}
							planName={planName}
							usePlanName={usePlanName}
							maxMember={maxMember}
							useMaxMember={useMaxMember}
							amountPerMonth={amountPerMonth}
							useAmountPerMonth={useAmountPerMonth}
						/>
					</GridItem>
					<GridItem colSpan={3}>
					<SettingPlan
						selectPlan={selectPlan}
						useSelectPlan={useSelectPlan}
						planName={planName}
						usePlanName={usePlanName}
						maxMember={maxMember}
						useMaxMember={useMaxMember}
						amountPerMonth={amountPerMonth}
						useAmountPerMonth={useAmountPerMonth}
					/>
					</GridItem>
				</Grid>
			</PlanLayout>
		)}
		</>
    )
}

export default Plan