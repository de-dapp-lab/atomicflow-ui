// Chakra imports
import { Box, Button, Flex, Link, Text,Image } from '@chakra-ui/react';

export default function BannerPlan() {
    const onclickCreate = () => {
        window.location.href = '/plan'
    }
	// Chakra Color Mode
	return (
		<Box background="white" w='100%' p={4} color='white' borderRadius='30px'>
            <Flex justifyContent="space-between">
                <Text color={"black"} fontSize="24px" >
                    Create Default Plan
                </Text>
                <Button 
                    background="#4318FF"
                    p={4}
                    onClick={onclickCreate}
                >
                    Create
                </Button>
            </Flex>
            <Text
                color="gray"
                fontSize="16px"
            >
                First, let's create a default plan. After creating a plan, you can customize it!
            </Text>
            <Box background="white" p={4} mt={4} borderRadius='10px' boxShadow="md" >
                <Flex>
                    <Image 
                        boxSize='80px'
                        objectFit='cover'
                        src="/img/basic.png"
                    />
                    <Box p={4}>
                        <Text color="#2B3674" fontSize="16px" >
                            Basic Plan
                        </Text>
                        <Text color="#A3AED0" fontSize="14px" >
                            8$ per user / month
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Box background="white" p={4} mt={4} borderRadius='10px' boxShadow="md">
                <Flex>
                    <Image 
                        boxSize='80px'
                        objectFit='cover'
                        src="/img/pro.png"
                    />
                    <Box p={4}>
                        <Text color="#2B3674" fontSize="16px">
                        Pro Plan
                        </Text>
                        <Text color="#A3AED0" fontSize="14px" >
                        15$ per user / month
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Box background="white" p={4} mt={4} borderRadius='10px' boxShadow="md">
                <Flex>
                    <Image 
                        boxSize='80px'
                        objectFit='cover'
                        src="/img/enterprise.png"
                    />
                    <Box p={4}>
                        <Text color="#2B3674" fontSize="16px">
                        Enterprise Plan
                        </Text>
                        <Text color="#A3AED0" fontSize="14px" >
                        20$ per user / month
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
	);
}