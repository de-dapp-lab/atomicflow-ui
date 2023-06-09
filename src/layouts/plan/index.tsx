// Chakra imports
import { Portal, Box, useDisclosure } from "@chakra-ui/react";
// Layout components
import { FC, ReactNode, useState } from "react";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Route } from "@/model/navigation";

type Props = {
  children: ReactNode;
};

export const PlanLayout: FC<Props> = ({ children }) => {
  const [fixed] = useState(false);
  const { onOpen } = useDisclosure();

  const routes: Route[] = [
    {
      name: "Plan",
      layout: "/plan",
      component: <></>,
      icon: <></>,
      secondary: false,
      path: "/plan",
    },
    {
      name: "Dashboard",
      layout: "/admin",
      component: <></>,
      icon: <></>,
      secondary: false,
      path: "/dashboard",
    },
    {
      name: "Plan",
      layout: "/admin",
      component: <></>,
      icon: <></>,
      secondary: true,
      path: "/plan",
    },
    {
      name: "Profile",
      layout: "/admin",
      component: <></>,
      icon: <></>,
      secondary: true,
      path: "/Profile",
    },
    {
      name: "Sign In",
      layout: "/admin",
      component: <></>,
      icon: <></>,
      secondary: true,
      path: "/Sign In",
    },
  ];

  const [currentRoute, setCurrentRoute] = useState(routes[0]);
  return (
    <Box>
      <Sidebar routes={routes} />
      <Box
        float="right"
        minHeight="100vh"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={{ base: "100%", xl: "calc( 100% - 290px )" }}
        maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        <Portal>
          <Box>
            <Navbar
              onOpen={onOpen}
              logoText={"Atomicflow"}
              brandText={currentRoute.name}
              secondary={currentRoute.secondary ?? false}
              message={""}
              fixed={fixed}
            />
          </Box>
        </Portal>

        <Box
          mx="auto"
          p={{ base: "20px", md: "30px" }}
          pe="20px"
          minH="100vh"
          pt="50px"
        >
          {children}
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
