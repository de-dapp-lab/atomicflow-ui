import { CheckIcon } from "@chakra-ui/icons";
import {
  Text,
  ModalBody,
  ModalCloseButton,
  Modal,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
  HStack,
  forwardRef,
  useStyleConfig,
  chakra,
  VStack,
  Image,
  Badge,
  Button,
  Link,
  Checkbox,
  Center,
  Input,
} from "@chakra-ui/react";
import React, { FC, useCallback, useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CustomCardProps } from "@/theme/theme";
import { ethers } from "ethers";
import { useContract } from "@/hooks/useContract";
import { useAccount } from "wagmi";
import stringToBigNumberHash from "@/hooks/ethers";

const Card = forwardRef<CustomCardProps, "div">((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("Card", { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});

type Plan = {
  id: string;
  name: string;
  fee: number;
  details: string[];
  isMostPopular: boolean;
  image: string;
  buttonLabel?: string;
  planKey: ethers.BigNumber;
};

type Step = "select" | "approve" | "confirm" | "applied";
type Mode = "wallet" | "email";

type Props = {
  mode: Mode;
};

export const ApplyPlanModal: FC<Props> = ({ mode }) => {
  const [steps, setSteps] = useState<Step>("select");
  const [selectedPlan, setSelectedPlan] = useState<Plan>();
  const [checkTerms, setCheckTerms] = useState<boolean>(false);

  const { subscriptionManager } = useContract();
  const { address } = useAccount();

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckTerms(event.target.checked);
  };

  const handleSelectedPlan = useCallback((plan: Plan) => {
    setSelectedPlan(plan);

    if (mode == "wallet" && address !== undefined) {
      setSteps("approve");
    } else {
      setSteps("confirm");
    }
  }, []);

  const handleClose = useCallback(() => {
    setSteps("select");
  }, []);

  const handleDemo = useCallback(() => {
    setSteps("applied");
  }, []);

  const handleConfirm = useCallback(() => {
    switch (mode) {
      case "wallet":
        setSteps("approve");
        break;
      case "email":
        setSteps("applied");
        break;
    }
  }, [mode]);

  useEffect(() => {
    if (address && selectedPlan) {
      setSteps("approve");
    }
  }, [address]);

  const getAllPayment = async () => {
    if (!subscriptionManager) {
      throw new Error("subscriptionManager instance is required");
    }

    try {
      console.log(await subscriptionManager?.getAllPayments());
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      }
      console.log(e);
    }
  };

  const handleApproved = async () => {
    if (!subscriptionManager) {
      throw new Error("subscriptionManager instance is required");
    }

    try {
      await subscriptionManager?.startPayment(
        ethers.BigNumber.from(selectedPlan?.planKey),
        ethers.BigNumber.from(address)
      );
      window.location.href = "payer/dashboard";
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      }
      console.log(e);
    }
  };

  // Theme
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const bg = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorPrimaryBgBrand = useColorModeValue(
    "white",
    "secondaryGray.900"
  );
  const textColorBrand = useColorModeValue("brand.500", "white");

  // Plans
  const basicPlan: Plan = {
    id: "1",
    name: "tmpLLM v3.5",
    fee: 0.01,
    details: [
      "Pay with stable coin",
      "Collaborative workspace",
      "Invite up to 10 guests",
      "Web3 tools integrations",
    ],
    isMostPopular: false,
    image: "basic-plan.jpg",
    buttonLabel: "Select",
    planKey: stringToBigNumberHash("tmpLLM v3.5"),
  };

  const proPlan: Plan = {
    id: "2",
    name: "tmpLLM v4.0",
    fee: 0.05,
    details: [
      "Pay with stable coin or native token",
      "Collaborative workspace",
      "Invite up to 10 guests",
      "Web3 tools integrations",
      "Email support",
      "Discount after 1 years",
    ],
    isMostPopular: true,
    image: "pro-plan.jpg",
    buttonLabel: "Select",
    planKey: stringToBigNumberHash("tmpLLM v4.0"),
  };

  const enterprisePlan: Plan = {
    id: "3",
    name: "tmpLLM v5.0",
    fee: 1,
    details: [
      "Pay with stable coin or native token",
      "Collaborative workspace",
      "Invite up to 10 guests",
      "Web3 tools integrations",
      "Email support",
      "SSO/SAML Login",
      "Onboarding Support",
      "Discount after 1 years",
    ],
    isMostPopular: false,
    image: "enterprise-plan.jpg",
    buttonLabel: "Select",
    planKey: stringToBigNumberHash("tmpLLM v5.0"),
  };

  const plans = [basicPlan, proPlan, enterprisePlan];

  const PlanList = (
    <HStack spacing={4} alignItems="strech">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          bg={bg}
          p="14px"
          boxShadow={cardShadow}
          flex="1 1 0%"
        >
          <VStack alignItems="start" justify="space-between" h="full">
            <VStack alignItems="start" w="full">
              {/* Info */}
              <HStack w="full">
                <Image
                  alt={plan.name}
                  h="80px"
                  w="80px"
                  src={`/img/${plan.image}`}
                  borderRadius="8px"
                  me="20px"
                />
                <VStack alignItems="start" justify="space-between" w="full">
                  <VStack alignItems="start" w="full">
                    <HStack justify="space-between" w="full">
                      <Text
                        color={textColorPrimary}
                        fontWeight="500"
                        fontSize="md"
                      >
                        {plan.name}
                      </Text>
                      {plan.isMostPopular && (
                        <Badge
                          fontSize="xx-small"
                          bg={brandColor}
                          color={textColorPrimaryBgBrand}
                        >
                          Most Popular
                        </Badge>
                      )}
                    </HStack>

                    <HStack>
                      <Text
                        color={textColorPrimary}
                        fontWeight="500"
                        fontSize={28}
                      >
                        {`$${plan.fee}`}
                      </Text>
                      <Text
                        color={textColorSecondary}
                        fontWeight="500"
                        fontSize="sm"
                      >
                        per user / minute
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </HStack>

              {/* Description */}
              <VStack px={4} py={8} alignItems="start">
                {plan.details.map((detail, i) => (
                  <HStack justify="start" key={`${plan.id}/${i}`}>
                    <CheckIcon />
                    <Text
                      color={textColorPrimary}
                      fontWeight="500"
                      fontSize="sm"
                    >
                      {detail}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>

            <Button
              me="100%"
              mb="50px"
              w="full"
              minW="140px"
              mt={{ base: "20px", "2xl": "auto" }}
              variant="brand"
              fontWeight="500"
              onClick={() => handleSelectedPlan(plan)}
            >
              {plan.buttonLabel ?? "Start"}
            </Button>
          </VStack>
        </Card>
      ))}
    </HStack>
  );

  const Confirm = selectedPlan && (
    <VStack alignItems="start" w="full">
      <VStack alignItems="start" w="full" spacing={6}>
        <Text color={textColorPrimary} fontWeight="500" fontSize="sm">
          Your plan
        </Text>
        <Card bg={bg} boxShadow={cardShadow} w="full">
          <HStack w="full">
            <Image
              alt={selectedPlan.name}
              h="80px"
              w="80px"
              src={`/img/${selectedPlan.image}`}
              borderRadius="8px"
              me="20px"
            />
            <VStack alignItems="start" justify="space-between" w="full">
              <VStack alignItems="start" w="full">
                <HStack justify="space-between" w="full">
                  <Text color={textColorPrimary} fontWeight="500" fontSize="md">
                    {selectedPlan.name}
                  </Text>
                  {selectedPlan.isMostPopular && (
                    <Badge
                      fontSize="xx-small"
                      bg={brandColor}
                      color={textColorPrimaryBgBrand}
                    >
                      Most Popular
                    </Badge>
                  )}
                </HStack>

                <HStack>
                  <Text color={textColorPrimary} fontWeight="500" fontSize={28}>
                    {`$${selectedPlan.fee}`}
                  </Text>
                  <Text
                    color={textColorSecondary}
                    fontWeight="500"
                    fontSize="sm"
                  >
                    per user / month
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </HStack>
        </Card>

        <Center w="full" py={2}>
          <HStack>
            <Checkbox
              colorScheme="brand"
              isChecked={checkTerms}
              onChange={handleSelectChange}
            />
            <Text color={textColorPrimary} fontWeight="700" fontSize="14px">
              By joining, you agree to our
              <Link href="src/components#">
                <a>
                  <Text
                    color={textColorBrand}
                    as="span"
                    ms="5px"
                    fontWeight="700"
                  >
                    Terms of Service
                  </Text>
                </a>
              </Link>
              and
              <Link href="src/components#">
                <a>
                  <Text
                    color={textColorBrand}
                    as="span"
                    ms="5px"
                    fontWeight="700"
                  >
                    Privacy Policy
                  </Text>
                </a>
              </Link>
            </Text>
          </HStack>
        </Center>

        {/* mailとwalletで分ける */}
        <Button
          me="100%"
          mb="50px"
          w="full"
          minW="140px"
          mt={{ base: "20px", "2xl": "auto" }}
          variant="brand"
          fontWeight="500"
          isDisabled={!checkTerms}
        >
          <ConnectButton />
        </Button>
      </VStack>
    </VStack>
  );

  const Approve = selectedPlan && (
    <VStack alignItems="start" w="full">
      <VStack alignItems="start" w="full">
        <Text color={textColorPrimary} fontWeight="500" fontSize="sm">
          Your plan
        </Text>
        <Card bg={bg} boxShadow={cardShadow} w="full">
          <HStack w="full">
            <Image
              alt={selectedPlan.name}
              h="80px"
              w="80px"
              src={`/img/${selectedPlan.image}`}
              borderRadius="8px"
              me="20px"
            />
            <VStack alignItems="start" justify="space-between" w="full">
              <VStack alignItems="start" w="full">
                <HStack justify="space-between" w="full">
                  <Text color={textColorPrimary} fontWeight="500" fontSize="md">
                    {selectedPlan.name}
                  </Text>
                  {selectedPlan.isMostPopular && (
                    <Badge
                      fontSize="xx-small"
                      bg={brandColor}
                      color={textColorPrimaryBgBrand}
                    >
                      Most Popular
                    </Badge>
                  )}
                </HStack>

                <HStack>
                  <Text color={textColorPrimary} fontWeight="500" fontSize={28}>
                    {`$${selectedPlan.fee}`}
                  </Text>
                  <Text
                    color={textColorSecondary}
                    fontWeight="500"
                    fontSize="sm"
                  >
                    per user / month
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </HStack>
        </Card>

        <Text color={textColorPrimary} fontWeight="500" fontSize="md"></Text>

        <Button
          me="100%"
          mb="50px"
          w="full"
          minW="140px"
          mt={{ base: "20px", "2xl": "auto" }}
          variant="brand"
          fontWeight="500"
          onClick={handleApproved}
        >
          Start Subscription
        </Button>
      </VStack>
    </VStack>
  );

  const Applied = selectedPlan && (
    <VStack alignItems="start" w="full">
      <VStack alignItems="start" w="full">
        <Text color={textColorPrimary} fontWeight="500" fontSize="sm">
          Your plan
        </Text>
        <Card bg={bg} boxShadow={cardShadow} w="full">
          <HStack w="full">
            <Image
              alt={selectedPlan.name}
              h="80px"
              w="80px"
              src={`/img/${selectedPlan.image}`}
              borderRadius="8px"
              me="20px"
            />
            <VStack alignItems="start" justify="space-between" w="full">
              <VStack alignItems="start" w="full">
                <HStack justify="space-between" w="full">
                  <Text color={textColorPrimary} fontWeight="500" fontSize="md">
                    {selectedPlan.name}
                  </Text>
                  {selectedPlan.isMostPopular && (
                    <Badge
                      fontSize="xx-small"
                      bg={brandColor}
                      color={textColorPrimaryBgBrand}
                    >
                      Most Popular
                    </Badge>
                  )}
                </HStack>

                <HStack>
                  <Text color={textColorPrimary} fontWeight="500" fontSize={28}>
                    {`$${selectedPlan.fee}`}
                  </Text>
                  <Text
                    color={textColorSecondary}
                    fontWeight="500"
                    fontSize="sm"
                  >
                    per user / month
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </HStack>
        </Card>

        <Text color={textColorPrimary} fontWeight="500" fontSize="md"></Text>

        <Button
          me="100%"
          mb="50px"
          w="full"
          minW="140px"
          mt={{ base: "20px", "2xl": "auto" }}
          variant="brand"
          fontWeight="500"
          onClick={handleApproved} // FIXME
        >
          Start Subscription
        </Button>
      </VStack>
    </VStack>
  );

  const getContent = () => {
    switch (steps) {
      case "select":
        return PlanList;
      case "confirm":
        return Confirm;
      case "approve":
        return Approve;
      case "applied":
        return Applied;
    }
  };

  return (
    <Modal isOpen={true} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent
        maxWidth={steps == "select" ? "container.xl" : "container.sm"}
        bg="background"
        borderColor="white"
        borderWidth={1}
        p={8}
        rounded={30}
      >
        <ModalCloseButton m={8} />
        <ModalHeader>
          <VStack alignItems="start">
            <Text
              color={textColorPrimary}
              fontSize="22px"
              fontWeight="700"
              lineHeight="100%"
            >
              Find a plan
            </Text>
            <Text
              fontWeight="500"
              color={textColorSecondary}
              fontSize="sm"
              me="4px"
            >
              Find a plan to power your projects and teams!
            </Text>
          </VStack>
        </ModalHeader>
        <ModalBody>{getContent()}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
