import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={submit}
      className="border-2 border-stone-500 pl-2 sm:mr-5 mr-2 "
      sx={{ borderRadius: 20 }}
    >
      <div className="w-full flex">
        <input
          value={searchTerm}
          placeholder="search... "
          className="w-full border-none rounded-3xl"
          onChange={(e) => {
            console.log(searchTerm);
            setSearchTerm(e.target.value);
          }}
        />
        <IconButton type="submit">
          {" "}
          <Search className="text-red-600"></Search>
        </IconButton>
      </div>
    </Paper>
  );
};

export default SearchBar;
