import bullseye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

function Emoji({ rating }: EmojiProps) {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} />;
}

export default Emoji;
