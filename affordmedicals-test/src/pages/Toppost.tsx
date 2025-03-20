import React from "react";
import { useFetch } from "../hooks/usebackend";
import { Post } from "../utils/interface";
import { Layout } from "../components/Layout";
const Toppost = () => {
  const { data: posts, loading, error } = useFetch("posts", "type=popular");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

return (
    <Layout>
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Top Posts</h2>
            <ul className="space-y-4">
              {posts.filter((post): post is Post => 'title' in post).map((post) => (
                <li key={post.id} className="p-4 border rounded shadow-sm">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-gray-600">{new Date(post.createdAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
        </div>
    </Layout>
);
};

export default Toppost;
