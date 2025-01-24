import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/about";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog-details";

export default function Routing() {
  return (
    <div className="min-h-[80vh]">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </div>
    
  );
}