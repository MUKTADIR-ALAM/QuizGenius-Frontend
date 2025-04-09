import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const useLesson = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams(); 

  // Fetching logic with fallback for missing `id`
  const fetchLesson = async () => {
    if (!id) {
      throw new Error("No lesson ID provided in the URL");
    }
    const res = await axiosPublic.get(`/lesson/${id}`);
    return res.data;
  };

  // Use useQuery hook always, but handle errors or missing data inside the query function
  const { data, error, isLoading } = useQuery({
    queryKey: ['lesson', id],
    queryFn: fetchLesson,
    enabled: !!id, // This ensures that the query is only triggered if `id` is available
  });

  return { data, error, isLoading };
};

export default useLesson;
