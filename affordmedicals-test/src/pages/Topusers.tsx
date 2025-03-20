import React from "react";
import { useFetch } from "../hooks/usebackend";
import { User } from "../utils/interface";
import { Layout } from "../components/Layout";

const TopUsers = () => {
  const { data: users, loading, error } = useFetch("users") as { data: User[], loading: boolean, error: string };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

return (
    <Layout>
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Top Users</h2>
            <ul className="space-y-4">
            {users.map((user: User, index) => (
                <li
                key={index}
                className="p-4 border rounded shadow-sm"
                >
                <span className="font-bold">{user.name}</span> - {user.postCount} posts
                </li>
            ))}
            </ul>
        </div>
    </Layout>
);
};

export default TopUsers;
