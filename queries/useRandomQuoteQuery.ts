import axios from "axios";
import { useQuery } from "@tanstack/vue-query";


export const useRandomQuoteQuery = () => {
  return useQuery({
    queryKey: ['repoData'],
    async queryFn() {
      return await fetch('/api/random')
      .then((response) => { return response.json(); })
      .catch((error) => { 
        throw new Error(error); 
      });
    },
    staleTime: 1000 * 60 * 2,
  })
}
