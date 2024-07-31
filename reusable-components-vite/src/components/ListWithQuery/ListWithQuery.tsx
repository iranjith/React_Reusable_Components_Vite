import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

const ListWithQuery = () => {
  // Access the client
  //const queryClient = useQueryClient();

  // Queries
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    staleTime: 1 * 60 * 1000, // 5 minutes
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul
      style={{
        color: "white",
        textAlign: "left",
      }}
    >
      {data
        .map((post: { id: number; title: string }) => (
          <li
            style={{
              border: "1px solid white",
            }}
            key={post.id}
          >
            {post.title}
          </li>
        ))
        .slice(0, 10)}
    </ul>
  );
};

export default ListWithQuery;
