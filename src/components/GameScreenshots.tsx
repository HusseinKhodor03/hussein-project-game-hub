import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface GameScreenshotsProps {
  gameID: number;
}

function GameScreenshots({ gameID }: GameScreenshotsProps) {
  const { data, isLoading, error } = useScreenshots(gameID);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8px">
      {data?.results.map((file) => (
        <Image borderRadius="8px" key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
