import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack padding="10px">
      <Link to="/">
        <div
          style={{
            fontSize: "18px",
            fontWeight: "900",
            letterSpacing: "5px",
            lineHeight: "1",
          }}
        >
          RAWG
        </div>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
