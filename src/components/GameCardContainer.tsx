import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.3s",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
