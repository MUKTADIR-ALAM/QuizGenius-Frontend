// hooks/useAllLessons.js
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllLessons = (
  subject="",
  topic="",
  currentPage=0,
  itemsPerPage=8
) => {
  const axiosPublic = useAxiosPublic();

  const isFiltered = !!subject || !!topic;
  const url = isFiltered ? "/lessons-query" : "/lessons";

  const {
    data: Lessons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [
      "lessons",
      subject,
    topic,
      currentPage,
      itemsPerPage,
    ],
    enabled: !!subject || !!topic || !subject,
    staleTime: 0,
    cacheTime: 0,
    queryFn: async () => {
      const params = isFiltered
        ? { subject, topic, currentPage,
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
