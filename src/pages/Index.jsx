import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} mb={8}>
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>
            Featured Article
          </Heading>
          <Image src="/images/featured-article.jpg" alt="Featured Article" mb={4} />
          <Text fontSize="lg">
            This is the featured article. It contains a summary of the most important news.
          </Text>
        </Box>
        <Box flex="1">
          <Heading as="h3" size="lg" mb={4}>
            Trending News
          </Heading>
          <VStack align="start" spacing={4}>
            <Text>Trending news item 1</Text>
            <Text>Trending news item 2</Text>
            <Text>Trending news item 3</Text>
          </VStack>
        </Box>
      </Flex>
      <Box>
        <Heading as="h3" size="lg" mb={4}>
          Latest Updates
        </Heading>
        <VStack align="start" spacing={4}>
          <Text>Latest update 1</Text>
          <Text>Latest update 2</Text>
          <Text>Latest update 3</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;