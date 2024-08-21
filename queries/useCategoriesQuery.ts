import { useQuery } from "@tanstack/vue-query";


export const useCategoriesQuery = () => {
 
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {

      const response = await fetch('/api/categories', {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      return response.json();
    },
    staleTime: 1000 * 60 * 2,
  });
};

