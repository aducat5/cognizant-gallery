//react imports
import React from "react";
//3rd party imports
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Text, Stack, Link, Button } from "@chakra-ui/react";

const EmptyView = (props) => (
  <Box textAlign="center" py={10} px={6}>
    {/* <CheckCircleIcon boxSize={"50px"} color={"green.500"} /> */}
    <Heading as="h2" size="xl" mt={6} mb={2}>
      {props.title}
    </Heading>
    <Text color={"gray.500"}>{props.text}</Text>
    <Stack
      direction={"column"}
      spacing={3}
      align={"center"}
      alignSelf={"center"}
      position={"relative"}
      marginTop={"5%"}
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
        <Link as={RouterLink} to="/home">
          To Home!
        </Link>
      </Button>
    </Stack>
  </Box>
);

export default EmptyView;
