import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllSubjects = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: subjectsToSet, isLoading, isError 
  } = useQuery({
    queryKey: ["subjects"],
    queryFn: async () => {
      console.log("Fetching lessons for:");
      const res = await axiosPublic.get("/subjects");
      
      console.log(res);
      return res.data;
    },
  });

  return { subjectsToSet, isLoading, isError  };
};

export default useAllSubjects;
