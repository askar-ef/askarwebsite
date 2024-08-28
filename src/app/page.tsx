import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  VStack,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import NextLink from "next/link";

export default function Home() {
  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage="linear-gradient(to bottom, #d9dbdc, #ffffff, #ffffff)"
      px={{ base: 4, md: 8 }} // Menambahkan padding horizontal untuk layar yang lebih kecil
    >
      <VStack spacing={6} align="center" maxWidth="container.lg">
        <Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={0}
            align="center"
          >
            <Image
              borderRadius="full"
              boxSize={{ base: "150px", md: "250px" }} // Ukuran gambar lebih kecil di layar kecil
              src="https://i.ibb.co.com/MgqnHVQ/ASKAR-TF-AKBAR-2.png"
              alt="Profile Picture"
            />
            <Box
              mx={8}
              textAlign={{ base: "center", md: "left" }}
              mt={{ base: 2, md: 4 }}
            >
              <NextLink href="" passHref>
                <Link
                  color="gray.600"
                  fontSize={{ base: "3xl", md: "6xl" }} // Ukuran font lebih kecil di layar kecil
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
              <Text
                fontSize={{ base: "md", md: "xl" }} // Ukuran teks lebih kecil di layar kecil
                color="gray.500"
                maxW="full"
                lineHeight="1.4"
              >
                Askar is a second-year student at Gadjah Mada University
                majoring in Software Engineering. He is an innovative thinker,
                constantly seeking new ideas. His interests include IT
                management, mobile software development, and design. Askar has
                strong public speaking and communication skills and is actively
                seeking opportunities to advance his career in the IT field.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={2}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="https://github.com/askar-ef" isExternal>
            <Button
              leftIcon={<FaGithub />}
              colorScheme="black"
              variant="outline"
              w={{ base: "full", md: "auto" }} // Tombol akan penuh di layar kecil
            >
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/daffaaskarfathin" isExternal>
            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="black"
              variant="outline"
              w={{ base: "full", md: "auto" }} // Tombol akan penuh di layar kecil
            >
              LinkedIn
            </Button>
          </Link>
          <NextLink href="/portfolio" passHref>
            <Button
              leftIcon={<MdOutlineDesignServices />}
              colorScheme="black"
              variant="outline"
              w={{ base: "full", md: "auto" }} // Tombol akan penuh di layar kecil
            >
              Portfolio & Skills
            </Button>
          </NextLink>
        </Flex>
      </VStack>
    </Flex>
  );
}
