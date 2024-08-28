import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  Container,
  VStack,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiCanva } from "react-icons/si";
import NextLink from "next/link";

export default function Home() {
  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.100"
    >
      <VStack spacing={1} align="center" maxWidth="container.lg">
        <Box>
          <HStack spacing={10} align="center">
            <Image
              borderRadius="full"
              boxSize="250px"
              src="https://i.ibb.co.com/MgqnHVQ/ASKAR-TF-AKBAR-2.png"
              alt="Profile Picture"
              mb={2}
            />
            <Box textAlign="left">
              <NextLink href="/about" passHref>
                <Link
                  color="gray.600"
                  fontSize="6xl"
                  fontWeight="bold"
                  lineHeight={1.2}
                  sx={{
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "none",
                    },
                  }}
                >
                  Daffa Askar Fathin
                </Link>
              </NextLink>
              <Text fontSize="xl" color="gray.500" maxW="full" lineHeight="1.4">
                Askar is a second-year student at Gadjah Mada University
                majoring in Software Engineering. He is an innovative thinker,
                constantly seeking new ideas. His interests include IT
                management, mobile software development, and design. Askar has
                strong public speaking and communication skills and is actively
                seeking opportunities to advance his career in the IT field.
              </Text>
            </Box>
          </HStack>
        </Box>

        <Flex direction="row" gap={2}>
          <Link href="https://github.com/askar-ef" isExternal>
            <Button
              leftIcon={<FaGithub />}
              colorScheme="black"
              variant="outline"
            >
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/daffaaskarfathin" isExternal>
            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="black"
              variant="outline"
            >
              LinkedIn
            </Button>
          </Link>
          <NextLink href="/portfolio" passHref>
            <Button
              leftIcon={<MdOutlineDesignServices />}
              colorScheme="black"
              variant="outline"
            >
              Portfolio & Skills
            </Button>
          </NextLink>
        </Flex>
      </VStack>
    </Flex>
  );
}
