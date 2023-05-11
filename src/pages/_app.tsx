import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerPrivider } from "../contexts/SidebarDrawerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerPrivider>
        <Component {...pageProps} />
      </SidebarDrawerPrivider>
    </ChakraProvider>
  );
}
