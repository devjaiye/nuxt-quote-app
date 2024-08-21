import { useQuery } from "@tanstack/vue-query";


export const useCategoriesByIdQuery = (id: Ref<string>) => {
 
  return useQuery({
    queryKey: ["quotes", id],

    queryFn: async () => {

      const response = await fetch(`/api/quotes/${id.value}`, {
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

