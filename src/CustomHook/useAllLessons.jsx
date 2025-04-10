import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllLessons = (selectedSubject, selectedTopic) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: Lessons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["lessons", selectedSubject, selectedTopic],
    enabled: !!selectedTopic || !!selectedSubject,
    staleTime: 0,
    cacheTime: 0, 
    queryFn: async () => {
      console.log("Fetching lessons for:", selectedSubject, selectedTopic);
      const res = await axiosPublic.get("/lessons-query", {
        params: {
          selectedSubject,
          selectedTopic,
        },
      });
      console.log(res)
      return res.data;
    },
  });

  return { Lessons, isLoading, isError };
};

export default useAllLessons;
