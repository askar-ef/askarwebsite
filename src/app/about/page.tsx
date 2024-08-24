// about/page.tsx
import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  Container,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import CardComponent from "../CardComponent";

export default function About() {
  const cards = [
    {
      event: "Pionir Gadjah Mada",
      role: "Co-Fasilitator Subcoordinator",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque turpis non lorem maximus, vitae posuere neque faucibus. Proin et dapibus urna. Ut ullamcorper ante quis ex malesuada, non vestibulum ex accumsan.",
      imageSrcs: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://www.minimaldesksetups.com/wp-content/uploads/2020/09/3-2-1024x819.jpg",
        "https://contents.lspr.ac.id/2023/07/event-organizer.jpg",
      ],
    },
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <Flex
        minH="100vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <VStack spacing={4} align="center">
          <Heading as="h1" size="2xl">
            About Me
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Here are some of my experiences and background.
          </Text>

          <Wrap spacing={8} justify="center" flexWrap="wrap">
            {cards.map((card, index) => (
              <WrapItem key={index}>
                {/* <CardComponent card={card} /> */}
              </WrapItem>
            ))}
          </Wrap>

          <Box>
            <Link href="/" color="teal.500" fontSize="lg">
              Go back to Home
            </Link>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
}
