import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  gameID: number;
}

function GameTrailer({ gameID }: GameTrailerProps) {
  const { data, error, isLoading } = useTrailers(gameID);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      style={{ borderRadius: "8px", marginBottom: "8px" }}
      src={first.data[480]}
      poster={first.preview}
      controls
    />
  ) : null;
}

export default GameTrailer;
