import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  ChanelDetail,
  Feed,
  SearchFeed,
  VideoDetail,
} from "./components";
function App() {
  return (
    <BrowserRouter className="App">
      <Box sx={{ backgroundColor: "white" }}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/chanel/:id" element={<ChanelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
