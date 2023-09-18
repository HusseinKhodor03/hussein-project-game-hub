import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: GameHeadingProps) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreID);

  const { data: platforms, error } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformID
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
