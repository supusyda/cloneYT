import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction={`row`}
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" className="flex items-center">
        <img src={logo} alt="hello" className="max-w-[32px] max-h-[32px]" />
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  );
};

export default Navbar;
