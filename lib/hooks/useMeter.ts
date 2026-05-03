import { useQuery } from "@tanstack/react-query";
import {
  Meter,
  MeterCreatePayload,
  MeterCreateResponse,
  MeterDeleteResponse,
  MeterEditPayload,
  MeterResponse,
} from "../types/meter.types";
import { meterBaseUrl } from "../api/endpoints/meter-api";
import { authStorage } from "../auth-storage";
import { useApiMutation } from "./useApiMutation";

// Get all meters
export const useAllMeters = () => {
  return useQuery<MeterResponse, Error>({
    queryKey: [meterBaseUrl.GET_ALL_METERS],
    // queryFn : getAllMeters,
    queryFn: async () => {
      const token = authStorage.getToken();
      const res = await fetch(meterBaseUrl.GET_ALL_METERS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message);
      }
      return data;
    },
  });
};

// Get meter by ID
export const useSingleMeter = (meterId: string) => {
  return useQuery<Meter, Error>({
    queryKey: [meterBaseUrl.GET_SINGLE_METER(meterId)],
    queryFn: async () => {
      const token = authStorage.getToken();
      const res = await fetch(meterBaseUrl.GET_SINGLE_METER(meterId), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message);
      }
      return data.data;
    },
    enabled: !!meterId,
  });
};

// Create meter
// export const useCreateMeter = () => {
//   const queryClient = useQueryClient();

//   return useMutation<MeterCreateResponse, Error, MeterCreatePayload>({
//     mutationFn: async (payload: MeterCreatePayload) => {
//       const token = authStorage.getToken();
//       const res = await fetch(meterBaseUrl.CREATE_METER, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data?.message);
//       }
//       return data;
//     },
//     onSuccess: (data) => {
//       toast.success(data?.message);
//       queryClient.invalidateQueries({
//         queryKey: [meterBaseUrl.GET_ALL_METERS],
//       });
//     },
//     // onError : (error)=>{
//     //     toast.error(error?.message);
//     // }
//   });
// };
export const useCreateMeter = () => {
  return useApiMutation<MeterCreateResponse, MeterCreatePayload>(
    "POST",
    meterBaseUrl.CREATE_METER,
    [[meterBaseUrl.GET_ALL_METERS]],
  );
};

// Edit meter
// export const useEditMeter = (meterId: string) => {
//   const queryClient = useQueryClient();
//   return useMutation<MeterCreateResponse, Error, MeterEditPayload>({
//     mutationFn: async (payload: MeterEditPayload) => {
//       const token = authStorage.getToken();
//       const res = await fetch(meterBaseUrl.UPDATE_METER(meterId), {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data?.message);
//       }
//       return data;
//     },
//     onSuccess: (data) => {
//       toast.success(data?.message);
//       queryClient.invalidateQueries({
//         queryKey: [meterBaseUrl.GET_ALL_METERS],
//       });
//       queryClient.invalidateQueries({
//         queryKey: [meterBaseUrl.GET_SINGLE_METER(meterId)],
//       });
//     },
//     onError: (error) => {
//       toast.error(error?.message);
//     },
//   });
// };
export const useEditMeter = (meterId: string) => {
  return useApiMutation<MeterCreatePayload, MeterEditPayload>(
    "PATCH",
    meterBaseUrl.UPDATE_METER(meterId),
    [[meterBaseUrl.GET_SINGLE_METER(meterId)], [meterBaseUrl.GET_ALL_METERS]],
  );
};

// Delete meter
// export const useDeleteMeter = () => {
//   const queryClient = useQueryClient();
//   return useMutation<MeterDeleteResponse, Error, string>({
//     mutationFn: async (meterId: string) => {
//       const token = authStorage.getToken();
//       const res = await fetch(meterBaseUrl.DELETE_METER(meterId), {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data?.message);
//       }
//       return data;
//     },
//     onSuccess: (data) => {
//       toast.success(data?.message);
//       queryClient.invalidateQueries({
//         queryKey: [meterBaseUrl.GET_ALL_METERS],
//       });
//     },
//     onError: (error) => {
//       toast.error(error?.message);
//     },
//   });
// };
 export const useDeleteMeter = () =>{
  return useApiMutation<MeterDeleteResponse, string>(
    "DELETE",
    (meterId) => meterBaseUrl.DELETE_METER(meterId),
    [[meterBaseUrl.GET_ALL_METERS]]
  )
 }
