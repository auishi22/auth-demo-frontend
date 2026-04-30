import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authStorage } from "../auth-storage";
import { toast } from "sonner";

type Method = "POST" | "PATCH" | "DELETE";
export function useApiMutation<TResponse, TVariables>(
  method: Method,
  url: string | ((variables: TVariables) => string),
  invalidateKeys: string[][] = [],
) {
  const queryClient = useQueryClient();
  return useMutation<TResponse, Error, TVariables>({
    mutationFn: async (variables) => {
      const endpoint = typeof url === "function" ? url(variables) : url;
      const token = authStorage.getToken();
      const res = await fetch(endpoint, {
        method,
        headers: {
          ...(method !== "DELETE"
            ? { "Content-Type": "application/json" }
            : {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        ...(method !== "DELETE" ? { body: JSON.stringify(variables) } : {}),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong");
      }
      return data;
    },
    onSuccess: (data: any) => {
      if (data?.message) toast.success(data.message);
      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
