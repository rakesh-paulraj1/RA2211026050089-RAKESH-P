import { useState, useEffect } from "react";
import axios from "axios";
import { User, Post } from "../utils/interface";
const BASE_URL = "http://localhost:3001"; 



type FetchType = "users" | "posts";
type ResponseType = User[] | Post[];

export const useFetch = (endpoint: FetchType, queryParams?: string) => {
  const [data, setData] = useState<ResponseType>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/${endpoint}${queryParams ? `?${queryParams}` : ""}`);
        setData(response.data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, queryParams]);

  return { data, loading, error };
};
