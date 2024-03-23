import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovies = (id?: string) => {
  const { data, error, isLoading } = useSWR(`/api/movies/${id}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    isLoading,
    error,
  };
};

export default useMovies;
