import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex direction="column" align="center">
        <Text mb={2}>Financial Times</Text>
        <Flex>
          <Link href="/contact" mx={2} _hover={{ textDecoration: "underline" }}>
            Contact
          </Link>
          <Link href="/privacy-policy" mx={2} _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" mx={2} _hover={{ textDecoration: "underline" }}>
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;