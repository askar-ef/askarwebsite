import {
  Flex,
  VStack,
  Image,
  Box,
  Wrap,
  WrapItem,
  Text,
  Link,
} from "@chakra-ui/react";
import PortfolioItem from "../PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "PINKAN",
      year: "2024",
      description:
        "PINKAN is a desktop application specifically designed to offer innovative learning solutions for children in grades 1 to 2 who have ADHD, incorporating engaging educational games that utilize advanced machine learning technologies, including computer vision and voice recognition, to create a dynamic and personalized learning environment tailored to each child’s unique needs and abilities.",
      imageUrl: "https://i.ibb.co.com/9y2ksXG/PINKAN-Portfolio.png",
      role: "As Product Designer",
      detail:
        "Ideas Brainstorming, Product Design, Scientific Writing, System Analysis, UI/UX Design",
      logo: "https://i.ibb.co.com/XDWvzS3/PINKAN-LOGO.png",
    },
    {
      title: "Hubungkeun",
      year: "2024",
      description:
        "Hubungkeun is a mobile app that uses real-time location data to connect and facilitate collaboration among communities in Indonesia. It allows individuals, groups, and organizations to communicate, network, and coordinate activities based on their proximity, promoting community engagement and fostering partnerships.",
      imageUrl: "https://i.ibb.co.com/mt8DBKx/Hubungkeun-Portfolio.png",
      role: "As Product Designer",
      detail:
        "Ideas Brainstorming, Product Design, Scientific Writing, UI/UX Design",
      logo: "https://i.ibb.co.com/TtWjG3c/HUBUNGKEUN-LOGO.png",
    },
    {
      title: "DUWIT",
      year: "2024",
      description:
        "Duwit is a fintech application focused on facilitating smooth digital payments and the integration of electronic cards, specifically aimed at boarding schools. It collaborates with school canteens and nearby vendors operating within these educational facilities.",
      imageUrl: "https://i.ibb.co.com/47kjZZF/DUWIT-Portfolio.png",
      role: "As UI/UX Designer",
      detail: "User Interface and Experience Design",
      logo: "https://i.ibb.co.com/rdTXCQX/DUWIT-LOGO.png",
    },
    {
      title: "SyncPos",
      year: "2024",
      description:
        "SyncPos (Synchronize Posyandu) is a digital system that integrates health records from community health posts using national identification numbers (NIK). It aims to improve efficiency, accuracy, accessibility, and security in managing health data for elderly and toddler patients attending these posts.",
      imageUrl: "https://i.ibb.co.com/8YT3xS8/Sync-Pos-Portfolio.png",
      role: "As UI/UX Designer",
      detail: "User Interface and Experience Design",
      logo: "https://i.ibb.co.com/9WCvpgm/SYNCPOS-LOGO.png",
    },
    {
      title: "Potensia",
      year: "2023",
      description:
        "Potensia is a digital system that integrates health records from community health posts using national identification numbers (NIK). It aims to improve efficiency, accuracy, accessibility, and security in managing health data for elderly and toddler patients attending these posts.",
      imageUrl: "https://i.ibb.co.com/d0bSpY4/Potensia-Portfolio.png",
      role: "As Product Designer",
      detail:
        "Ideas Brainstorming, Scientific Writing, User Interface and Experience Design",
      logo: "https://i.ibb.co.com/MgGBNsc/POTENSIA-LOGO.png",
    },
    {
      title: "BroMo",
      year: "2023",
      description:
        "BroMo (Broiler Monitoring) is a mobile application designed for monitoring the chicken coops of a company in real-time. Users, including barn owners and workers (farmers), can track conditions inside the coops through sensors that measure parameters such as ammonia, temperature, and humidity. Furthermore, the application provides a platform for barn workers to submit daily reports on the coop conditions.",
      imageUrl: "https://i.ibb.co.com/f1pZFGn/Bro-Mo-Portfolio.png",
      role: "As Project Manager",
      detail: "Project Planning, Documentation, Communication, Negotiation",
      logo: "https://i.ibb.co.com/m6B7dhL/BROMO-LOGO.png",
    },
    {
      title: "AyoRancang",
      year: "2023",
      description:
        "AyoRancang is a mobile app that leverages AI for personalized consultations and centralizes information on higher education institutions and job opportunities, which are currently scattered across various platforms. This approach aims to provide users with consolidated and accessible resources for effective career planning and decision-making.",
      imageUrl: "https://i.ibb.co.com/9cGRmcF/Ayo-Rancang-Portfolio.png",
      role: "As Product Designer",
      detail:
        "Ideas Brainstorming, Scientific Writing, User Interface and Experience Design",
      logo: "https://i.ibb.co.com/ZzM63jF/AYORANCANG-LOGO.png",
    },
  ];

  return (
    <VStack bg={"gray.100"}>
      <Text
        ml={2}
        fontSize={{ base: "5xl", md: "8xl" }}
        color="gray.600"
        fontWeight="bold"
        letterSpacing="-0.03em"
        mb={-8}
      >
        Portfolio
      </Text>

      <Box
        as="img"
        src="https://i.ibb.co.com/bb6LjV7/Pinkan-View-Desktop.jpg"
        alt="Portfolio Banner"
        borderRadius="40px"
        p={5}
        style={{ width: "100%", maxWidth: "70%", margin: "0 auto" }}
      />
      <Text
        mt={-5}
        ml={2}
        fontSize={{ base: "xl", md: "2xl" }}
        color="gray.500"
        fontWeight="bold"
        letterSpacing="-0.03em"
        align="center"
      >
        Here are some projects I&apos;ve undertaken:
      </Text>
      <Text
        my={6}
        mt={-3}
        mb={-2}
        fontSize={{ base: "lg", md: "xl" }}
        color="gray.400"
        letterSpacing="-0.03em"
        align="center"
        mx={1}
      >
        Crafting an application as part of a coursework assignment, competing in
        idea competitions, and participating in projects funded through
        contests.
      </Text>
      <Wrap spacing={4} justify="center" mb={5} mt={5} bg={"white"} py={5}>
        {portfolioItems.map((item, index) => (
          <WrapItem key={index}>
            <Link
              href={`#${item.title}`}
              _focus={{ boxShadow: "none" }}
              _hover={{ textDecoration: "none" }}
            >
              <Box textAlign="center" px={2}>
                <Flex alignItems="center" justifyContent="center">
                  <Image
                    src={item.logo}
                    alt={`logo-${index}`}
                    maxW="60px"
                    objectFit="contain"
                    width={{ base: "40px", md: "60px" }}
                  />
                  <Text
                    ml={2}
                    fontSize={{ base: "xl", md: "4xl" }}
                    color="gray.400"
                    fontWeight="bold"
                    letterSpacing="-0.03em"
                  >
                    {item.title}
                  </Text>
                </Flex>
              </Box>
            </Link>
          </WrapItem>
        ))}
      </Wrap>
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="gray.100"
        minH="100vh"
        py={1}
      >
        <VStack spacing={6} width="full" maxW="container.xl" px={8}>
          {portfolioItems.map((item, index) => (
            <Box id={item.title} key={index}>
              <PortfolioItem
                title={item.title}
                year={item.year}
                description={item.description}
                imageUrl={item.imageUrl}
                role={item.role}
                detail={item.detail}
                logo={item.logo}
              />
            </Box>
          ))}
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Portfolio;
