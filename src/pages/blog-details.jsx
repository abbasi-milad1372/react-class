import { useParams } from "react-router";

export default function BlogDetails() {
  const { id } = useParams(); // Access the :id parameter
  return (
    <div className="container mx-auto">
      <h1>Blog Details</h1>
      <p>Blog ID: {id}</p>
      {/* Fetch or display blog data based on the id */}
    </div>
  );
}
