import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Text, Stack, Link, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Success = () => (
  <Box textAlign="center" py={10} px={6}>
    <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
    <Heading as="h2" size="xl" mt={6} mb={2}>
      Purchase is Successful!
    </Heading>
    <Text color={"gray.500"}>
      Purchase is successful! You can continue to browse cars from below button
    </Text>
    <Stack
      direction={"column"}
      spacing={3}
      align={"center"}
      alignSelf={"center"}
      position={"relative"}
    >
      <Button
        colorScheme={"green"}
        bg={"green.400"}
        rounded={"full"}
        px={6}
        _hover={{
          bg: "green.500",
        }}
      >
        <Link as={RouterLink} to="/cars">
          To The Cars!
        </Link>
      </Button>
    </Stack>
  </Box>
);
export default Success;
