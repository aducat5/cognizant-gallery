import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const CartListItem = (props) => {
  const { data } = props;
  const { image } = props;
  const { removeHandler } = props;
  return (
    <Box p="10px" my="22px" borderRadius="12px" key={data.id} borderWidth="1px">
      <Flex justify="space-between" w="100%">
        <Flex>
          <Image src={image} width={"150px"} />
        </Flex>
        <Flex direction="column" maxWidth="70%" paddingTop="20px">
          <Text fontSize="md" fontWeight="bold" mb="10px">
            {data.make} - {data.model}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Year Model:{" "}
            <Text as="span" color="gray.500">
              {data.yearModel}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Price:{" "}
            <Text as="span" color="gray.500">
              ${data.price}
            </Text>
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
            onClick={() => {
              removeHandler(data.warehouseId, data.id);
            }}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <DeleteIcon></DeleteIcon>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CartListItem;
