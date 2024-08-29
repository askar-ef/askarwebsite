"use client"; // Ensure this file is a Client Component

import React, { useState } from "react";
import { Box, Flex, VStack, Text, Link, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import NextLink from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage="linear-gradient(to bottom, #d9dbdc, #ffffff, #ffffff)"
      px={{ base: 4, md: 6 }} // Padding for smaller screens
    >
      <VStack spacing={1} align="center" maxWidth="container.xl">
        <Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={1}
            align={"center"}
          >
            <Box
              position="relative"
              width={{ base: "250px", md: "70%" }}
              borderRadius="full"
              overflow="hidden"
              ml={2}
              mt={-5}
            >
              <img
                src="https://i.ibb.co.com/MgqnHVQ/ASKAR-TF-AKBAR-2.png"
                alt="Profile Picture"
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  filter: loaded ? "blur(0)" : "blur(10px)",
                  transition: "filter 0.3s ease",
                  position: "absolute",
                  boxShadow: "0 0 15px rgba(0,0,0,0.3)", // Glow effect
                }}
              />
              <img
                src="https://i.ibb.co.com/MgqnHVQ/ASKAR-TF-AKBAR-2.png"
                alt="Profile Picture"
                style={{
                  objectFit: "cover",
                  borderRadius: "50%", // Rounded corners
                  filter: loaded ? "blur(0)" : "blur(10px)",
                  opacity: loaded ? 1 : 0,
                  transition: "opacity 0.3s ease, filter 0.3s ease",
                }}
                onLoad={() => setLoaded(true)}
              />
            </Box>
            <Box mx={8} textAlign={{ base: "center", md: "left" }}>
              <NextLink href="" passHref>
                <Link
                  color="gray.600"
                  fontSize={{ base: "3xl", md: "6xl" }}
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
                fontSize={{ base: "md", md: "xl" }} // Font size for smaller screens
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
          mt={{ base: 2, md: 4 }}
        >
          <Link href="https://github.com/askar-ef" isExternal>
            <Button
              leftIcon={<FaGithub />}
              colorScheme="black"
              variant="outline"
              w={{ base: "full", md: "auto" }} // Button full-width on small screens
            >
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/daffaaskarfathin" isExternal>
            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="black"
              variant="outline"
              w={{ base: "full", md: "auto" }} // Button full-width on small screens
            >
              LinkedIn
            </Button>
          </Link>
          <NextLink href="/portfolio" passHref>
            <Button
              leftIcon={<MdOutlineDesignServices />}
              colorScheme="black"
              variant="outline"
              w={{ base: "full", md: "auto" }} // Button full-width on small screens
            >
              Portfolio
            </Button>
          </NextLink>
          <Link
            href="https://drive.google.com/file/d/19fvPi3JQ67_eyeslFl03QbjFyubGzbYz/view?usp=sharing"
            isExternal
          >
            <Button
              leftIcon={<IoDocumentTextOutline />}
              colorScheme="black"
              variant="outline"
              w={{ base: "full", md: "auto" }} // Button full-width on small screens
            >
              CV
            </Button>
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Home;
