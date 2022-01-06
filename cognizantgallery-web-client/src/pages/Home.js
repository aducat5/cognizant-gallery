import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Welcome to the <br />
          <Text as={"span"} color={"green.400"}>
            test case!
          </Text>
        </Heading>
        <Text color={"gray.500"}>
          There is not much to see in this page actually, you can proceed to the
          cars page from here or navigation bar upwards.
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
            <Link href="/cars">To The Cars!</Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
