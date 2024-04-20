// hooks/useUser.ts
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const useUsers = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};
