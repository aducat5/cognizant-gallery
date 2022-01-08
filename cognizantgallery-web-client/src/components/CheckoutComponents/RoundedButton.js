import { Button } from "@chakra-ui/react";

const RoundedButton = (props) => {
  const color = props.color || "white";
  return (
    <Button
      colorScheme={"green"}
      bg={color + ".400"}
      rounded={"full"}
      px={6}
      _hover={{
        bg: color + ".500",
      }}
      marginTop={"10px"}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default RoundedButton;
