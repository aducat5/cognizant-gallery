import { Box, Flex, Text } from "@chakra-ui/react";

const SummaryItem = (props) => (
  <Box p="10px" my="22px" borderRadius="12px">
    <Flex justify="space-between" w="100%">
      <Flex direction="column" paddingTop="0px">
        <Text fontSize="md" fontWeight="bold" mb="10px">
          {props.title}
        </Text>
        <Text color="gray.400" fontSize="lg" fontWeight="semibold">
          <Text as="span" color="gray.500">
            {props.text}
          </Text>
        </Text>
      </Flex>
    </Flex>
  </Box>
);

export default SummaryItem;
