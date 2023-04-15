import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "@/theme/theme";
import React from "react";
import { type Chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { useIsClient } from "@/hooks/useIsClient";

export default function App({ Component, pageProps }: AppProps) {
  const scrollAlpha: Chain = {
    id: 534353,
    name: "scrollAlpha",
    network: "Scroll Alpha Testnet",
    // @ts-ignore
    iconUrl:
      "https://raw.githubusercontent.com/scroll-tech/frontends/53ee8664fc508effb7abc07b274ddb4c12b7b08c/src/assets/images/logo.png",
    nativeCurrency: {
      decimals: 18,
      name: "ETH",
      symbol: "ETH",
    },
    rpcUrls: {
      default: { http: ["https://alpha-rpc.scroll.io/l2"] },
      public: { http: ["https://alpha-rpc.scroll.io/l2"] },
    },
    blockExplorers: {
      default: {
        name: "blockscout",
        url: "https://blockscout.scroll.io",
      },
    },
    testnet: true,
  };

  const scrollProvider = jsonRpcProvider({
    rpc: (chain) => ({
      http: "https://alpha-rpc.scroll.io/l2",
    }),
  });

  const { chains, provider } = configureChains([scrollAlpha], [scrollProvider]);

  const { connectors } = getDefaultWallets({
    appName: "Atomicflow",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  const { isClient } = useIsClient();

  return (
    <>
      {isClient && (
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} coolMode>
            <ChakraProvider theme={theme}>
              <Head>
                <title>Atomicflow</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#4318FF" />
              </Head>
              <Component {...pageProps} />
            </ChakraProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      )}
    </>
  );
}
