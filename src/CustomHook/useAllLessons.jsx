// hooks/useAllLessons.js
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllLessons = (
  selectedSubject="",
  selectedTopic="",
  currentPage=1,
  itemsPerPage=6
) => {
  const axiosPublic = useAxiosPublic();

  const isFiltered = !!selectedSubject || !!selectedTopic;
  const url = isFiltered ? "/lessons-query" : "/lessons";

  const {
    data: Lessons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [
      "lessons",
      selectedSubject,
      selectedTopic,
      currentPage,
      itemsPerPage,
    ],
    enabled: !!selectedSubject || !!selectedTopic || !selectedSubject,
    staleTime: 0,
    cacheTime: 0,
    queryFn: async () => {
      const params = isFiltered
        ? { selectedSubject, selectedTopic, currentPage,
          itemsPerPage }
        : { currentPage,
          itemsPerPage };

      const res = await axiosPublic.get(url, { params });
      console.log(res.data);
      return res.data;
    },
  });

  return { Lessons, isLoading, isError };
};

export default useAllLessons;
