import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

function GameHeading() {
  const platformID = useGameQueryStore(
    (selector) => selector.gameQuery.platformID
  );
  const platform = usePlatform(platformID);

  const genreID = useGameQueryStore((selector) => selector.gameQuery.genreID);
  const genre = useGenre(genreID);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
