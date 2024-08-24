import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
