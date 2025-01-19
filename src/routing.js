import { Route, Routes } from "react-router";
import Home from "./Home";

export default function Routing() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
  );
}