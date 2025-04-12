import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;

// https://quiz-genius-backend.vercel.app