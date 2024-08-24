"use client";

import React, { useRef, useEffect } from "react";
import { Box, Text, Flex, VStack, Image, HStack } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useInView } from "react-intersection-observer";

interface PortfolioItemProps {
  title: string;
  year: string;
  description: string;
  imageUrl: string;
  role: string;
  detail: string;
  logo: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  year,
  description,
  imageUrl,
  role,
  detail,
  logo,
}) => {
  const imageRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.5 });

  // useEffect(() => {
  //   if (!inView) return;

  //   const imageTimeline = gsap.timeline({ paused: true });

  //   imageTimeline
  //     .fromTo(
  //       imageRef.current,
  //       { scale: 0.9 },
  //       { scale: 1, duration: 1.2, ease: "power3.out" }
  //     )
  //     .fromTo(
  //       imageRef.current,
  //       { opacity: 0 },
  //       { opacity: 1, duration: 1.2, ease: "power3.out" }
  //     );

  //   if (inView) {
  //     imageTimeline.play();
  //   }

  //   return () => {
  //     imageTimeline.kill();
  //   };
  // }, [inView]);

  const handleHover = () => {
    gsap.to(imageRef.current, {
      scale: 1.1,
      rotation: 2, // Adding a slight rotation
      duration: 0.3,
      ease: "back.out(1.7)", // Adds a bounce effect
    });
  };

  const handleHoverOut = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      rotation: 0, // Reset rotation
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      px={4}
      py={1}
      maxW="container.xl"
      mx="auto"
      ref={ref}
    >
      <Box
        justifyContent="space-between"
        mt={2}
        mb={2}
        w="full"
        maxW="1190px"
        mx="auto"
      >
        <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
          <Box flex="1" position="relative">
            <Box w="full" h="220px" overflow="hidden" borderRadius="lg">
              <Image
                loading="lazy"
                src={imageUrl}
                alt={title}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="full"
                h="full"
                objectFit="cover"
                borderRadius="lg"
                transition="opacity 0.3s ease"
                ref={imageRef}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              />
            </Box>
          </Box>
          <Box flex="1.5" ml={{ base: 0, md: 5 }}>
            <VStack
              justifyContent="space-between"
              alignItems="flex-start"
              pl={11}
              my="auto"
              spacing={0}
            >
              <HStack spacing={0} justifyContent="space-between" w="full">
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="semibold"
                  color="gray.600"
                  whiteSpace="nowrap"
                  letterSpacing="-0.04em"
                  my={-4}
                >
                  {title}
                </Text>
                <Text fontSize="2xl" fontStyle="italic" color="gray.500">
                  {year}
                </Text>
              </HStack>

              <Text
                mt={2.5}
                fontSize="xl"
                color="gray.400"
                maxW="full"
                lineHeight="1.2"
              >
                {description}
              </Text>

              <Text
                mt={2.5}
                fontSize="lg"
                fontStyle={"italic"}
                color="gray.500"
                maxW="full"
                letterSpacing="-0.02em"
              >
                {role}
              </Text>
              <Text
                fontSize="sm"
                color="gray.400"
                maxW="full"
                letterSpacing="-0.02em"
              >
                {detail}
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PortfolioItem;
