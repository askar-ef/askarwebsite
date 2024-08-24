import { Box, Text, VStack, Image } from "@chakra-ui/react";

interface CardProps {
  title: string;
  year: string;
  description: string;
  imageUrl: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  year,
  description,
  imageUrl,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      position="relative"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.3s ease",
      }}
    >
      <Image
        loading="lazy"
        src={imageUrl}
        alt={title}
        w="full"
        h="300px" // Fixed height of the image container
        objectFit="cover"
        transition="opacity 0.3s ease" // Fade-in transition
        borderRadius="lg"
      />
      <Box p={6}>
        <VStack alignItems="flex-start" spacing={4}>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="semibold"
            color="gray.600"
          >
            {title}
          </Text>
          <Text fontSize="xl" fontStyle="italic" color="gray.600">
            {year}
          </Text>
          <Text fontSize="lg" color="gray.400" maxW="full">
            {description}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default CardComponent;
